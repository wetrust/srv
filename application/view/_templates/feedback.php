<?php

// get the feedback (they are arrays, to make multiple positive/negative messages possible)
$feedback_positive = Session::get('feedback_positive');
$feedback_negative = Session::get('feedback_negative');

// echo out positive messages
if (isset($feedback_positive)) {
    $stringFeedback = '<div class="alert alert-success" role="alert">';

    foreach ($feedback_positive as $feedback) {
        $stringFeedback .= $feedback.'<br>';
    }
    echo $stringFeedback.'</div>';
}

// echo out negative messages
if (isset($feedback_negative)) {
   $stringFeedback = '<div class="alert alert-danger" role="alert">';
    foreach ($feedback_negative as $feedback) {
        $stringFeedback .= $feedback.'</br>';
    }
    echo $stringFeedback.'</div>';
}
