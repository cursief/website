<?php

// error_reporting(E_ALL ^ E_WARNING);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$_POST = json_decode(file_get_contents('php://input'), true) ?: [];

$emailBody = $_POST['emailBody'];
$emailBody = $_POST['emailBody'];

$response = [
  'success' => false,
  'message' => ''
];

$members = json_decode('%__MEMBERS__%');

$memberEmailsList = '';

foreach ($members as $member) {
  $memberEmailsList .= '"' . $member['firstName'] . ' ' . $member['lastName'] . '" <' . $member['email'] . '>;';
}

$memberEmailHeaders = [
  // 'MIME-Version' => '1.0',
  'Content-type' => 'text/plain; charset=utf-8',
  'From'         => 'Cursief <hello@cursief.co>',
  'Reply-To'     => 'Cursief <hello@cursief.co>'
];

// Setup the member e-mail
$memberEmail = [
  'subject' => 'New message from Cursief!',
  'headers' => $memberEmailHeaders
];

// Send e-mails to each member
foreach ($members as $member) {
  $memberEmailBody = <<<TXT
Hi {$member['firstName']}!

Cursief received a new message!
Please check the information below and decide with the team how to reply.

Beep boop,
Cursief Bot 🤖

---

{$emailBody}

TXT;

  mail(
    $member['email'],
    $memberEmail['subject'],
    $memberEmailBody,
    $memberEmail['headers']
  );
}

// Setup the client e-mail

$clientEmailBody = <<<TXT
Hi {$_POST['clientName']}!

We've received your message and will be in touch with you shortly.
You can find a copy of your message below.

Sincerely,
Cursief

---

{$emailBody}

TXT;

$clientEmail = [
  'email'   => $_POST['clientEmail'],
  'subject' => 'Contact confirmation',
  'body'    => $clientEmailBody,
  'headers' => $memberEmailHeaders
];

// Send e-mail to client
if (mail(
  $clientEmail['email'],
  $clientEmail['subject'],
  $clientEmail['body'],
  $clientEmail['headers']
)) {
  $response['success'] = true;
}

echo json_encode($response);
