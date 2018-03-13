<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Models\Carousel as Carousel;

Route::get('/', function () {
    $notices = \App\notices::get();
    $aboutus = \App\aboutus::get();
    $staffs = \App\staffs::get();

    return view('index', ['aboutus' => $aboutus, 'notices' => $notices, 'staffs' => $staffs]);
});


Route::get('/index', function () {
    $aboutus = \App\aboutus::get();
    $notices = \App\notices::get();
    $staffs = \App\staffs::get();

    return view('index', ['aboutus' => $aboutus, 'notices' => $notices, 'staffs' => $staffs]);

});


Route::get('/about', function () {
    $aboutus = \App\aboutus::get();
    $staffs = \App\staffs::get();
    $notices = \App\notices::get();

    return view('about', ['aboutus' => $aboutus, 'staffs' => $staffs]);
});

Route::get('/blog', function () {
    $aboutus = \App\aboutus::get();
    $notices = \App\notices::get();
    $staffs = \App\staffs::get();


    return view('blog', ['aboutus' => $aboutus, 'notices' => $notices]);


});

/*Route::get('/contact', function () {
    $aboutus = \App\aboutus::get();
    $notices = \App\notices::get();
    $staffs = \App\staffs::get();

    return view('contact', ['aboutus' => $aboutus]);

});*/


Route::get('/contact', function () {
    $aboutus = \App\aboutus::get();
    $notices = \App\notices::get();
    $staffs = \App\staffs::get();

    return view('contact', ['aboutus' => $aboutus]);

});


Route::get('/services', function () {
    $aboutus = \App\aboutus::get();
    $notices = \App\notices::get();
    $staffs = \App\staffs::get();
    return view('services', ['aboutus' => $aboutus]);

});

Route::get('/servicesdetail', function () {
    $aboutus = \App\aboutus::get();
    $notices = \App\notices::get();
    $staffs = \App\staffs::get();
    return view('single-services', ['aboutus' => $aboutus]);

});




Route::get('/projects   ', function () {
    $aboutus = \App\aboutus::get();
    $documents = \App\documents::get();
    $notices = \App\notices::get();
    $staffs = \App\staffs::get();

    return view('project', ['documents' => $documents, 'aboutus' => $aboutus]);

});

Route::get('/news   ', function () {
    $aboutus = \App\aboutus::get();
    $documents = \App\documents::get();
    $notices = \App\notices::get();
    $staffs = \App\staffs::get();

    return view('news', ['documents' => $documents, 'aboutus' => $aboutus]);

});

Route::get('/map   ', function () {
    $aboutus = \App\aboutus::get();
    $documents = \App\documents::get();
    $notices = \App\notices::get();
    $staffs = \App\staffs::get();

    return view('map', ['documents' => $documents, 'aboutus' => $aboutus]);

});



/*Route::get('/contact.php', function () {
    return view('contact.php');

});*/


/*Route::get('/contacts', function () {
// require ReCaptcha class
    require('recaptcha-master/src/autoload.php');

// configure
    $from = 'contact@itgnepal.com.np';
    $sendTo = 'contact@itgnepal.com.np';
    $subject = 'New message from itgnepal';
    $fields = array('name' => 'Name', 'surname' => 'Surname', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message'); // array variable name => Text to appear in the email
    $okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
    $errorMessage = 'There was an error while submitting the form. Please try again later';
    $recaptchaSecret = '6LfQH0UUAAAAAM39DCsL-QW-mnGWtnCnq2lGvLmH';

// let's do the sending

    try {
        if (!empty($_GET)) {

            // validate the ReCaptcha, if something is wrong, we throw an Exception,
            // i.e. code stops executing and goes to catch() block

            if (!isset($_GET['g-recaptcha-response'])) {
                throw new \Exception('ReCaptcha is not set.');
            }

            // do not forget to enter your secret key in the config above
            // from https://www.google.com/recaptcha/admin

            $recaptcha = new \ReCaptcha\ReCaptcha($recaptchaSecret, new \ReCaptcha\RequestMethod\CurlPost());

            // we validate the ReCaptcha field together with the user's IP address

            $response = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);


            if (!$response->isSuccess()) {
                throw new \Exception('ReCaptcha was not validated.');
            }

            // everything went well, we can compose the message, as usually

            $emailText = "You have new message from contact form\n=============================\n";

            foreach ($_GET as $key => $value) {

                if (isset($fields[$key])) {
                    $emailText .= "$fields[$key]: $value\n";
                }
            }


            $headers = array('Content-Type: text/plain; charset="UTF-8";',
                'From: ' . $from,
                'Reply-To: ' . $from,
                'Return-Path: ' . $from,
            );

            mail($sendTo, $subject, $emailText, implode("\n", $headers));

            $responseArray = array('type' => 'success', 'message' => $okMessage);
        }
    } catch (\Exception $e) {
        $responseArray = array('type' => 'danger', 'message' => $errorMessage);
    }

    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        $encoded = json_encode($responseArray);

        header('Content-Type: application/json');

        echo $encoded;
    } else {
        echo $responseArray['message'];
    }


});*/


Route::post(/**
 * @param \Illuminate\Http\Request $request
 * @return $this
 */
    '/sendform', function (\Illuminate\Http\Request $request) {

    $validator = Validator::make($request->all(), [


    ]);

    if ($validator->fails()) {
        return redirect('/contact')
            ->withInput()
            ->withErrors($validator);
    }

    $name = $request->name;
    $surname = $request->surname;
    $phone = $request->phone;
    $messages = $request->message;
    $email = $request->email;


    $data = array('name' => "$name", 'surname' => "$surname", 'phone' => "$phone", 'messages' => "$messages", 'email' => "$email");

    Mail::send(['text' => 'mail'], $data, function ($message) use ($email) {
        $message->to('contact@itgnepal.com.np')->subject
        ('Message from itgnepalweb');
        $message->from($email);

    });


    echo "Email Sent.Thank you for contacting International Trade Group Nepal. We shall get back to you at the earliest";

    header("refresh:3; url=contact");

});






/*Route::post('sendbasicemail', 'MailController@basic_email', function (Request $request) {


}


);
Route::get('sendhtmlemail', 'MailController@html_email');
Route::get('sendattachmentemail', 'MailController@attachment_email');


/*Route::get('user/{name}', function ($name) {
    //
})
    ->where('name', '(foo|bar|baz)');
*/


/*Auth::routes();

Route::get('/admin', 'HomeController@index')->name('home');
Route::get('/admin/carousel', 'HomeController@carouselAdmin')->name('carouselAdmin');
Route::get('/carousel/{section}', 'CarouselController@index')->name('carousel');
Route::post('/intro/carousel', 'CarouselController@saveCarousel')->name('createCarousel');

Route::get('/about/block', 'BlockController@about')->name('about');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/hero', 'HomeController@hero')->name('hero');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');*/


Route::group(['prefix' => 'maps'], function () {

    Route::group(['prefix' => 'leaflet'], function () {
        Route::get('/', [
            'uses' => 'LeafletController@index',
            'as' => 'maps.leaflet.index',
        ]);
        Route::get('basic', [
            'uses' => 'LeafletController@basic',
            'as' => 'maps.leaflet.basic',
        ]);
        Route::get('categories', [
            'uses' => 'LeafletController@pruneCategories',
            'as' => 'maps.leaflet.prune-categories',
        ]);
        Route::get('cluster', [
            'uses' => 'LeafletController@pruneCluster',
            'as' => 'maps.leaflet.prune-cluster',
        ]);
        Route::get('control', [
            'uses' => 'LeafletController@pruneControl',
            'as' => 'maps.leaflet.prune-control',
        ]);

        Route::get('district', [
            'uses' => 'LeafletController@districtControl',
            'as' => 'maps.leaflet.district',
        ]);

        Route::get('devregion', [
            'uses' => 'LeafletController@devregionControl',
            'as' => 'maps.leaflet.devregion',
        ]);


        Route::get('sadarmukam', [
            'uses' => 'LeafletController@sadarmukamControl',
            'as' => 'maps.leaflet.sadarmukam',
        ]);

        Route::get('province7', [
            'uses' => 'LeafletController@province7Control',
            'as' => 'maps.leaflet.province7',
        ]);

        Route::get('population', [
            'uses' => 'LeafletController@populationControl',
            'as' => 'maps.leaflet.population',
        ]);




    });

    Route::group(['prefix' => 'mapbox'], function () {
        Route::get('index', function () {
            echo 'hi mapbox index';
        });
    });

    // only map controller
    Route::get('tracking', [
        'uses' => 'MapController@tracking',
        'as' => 'maps.tracking',
    ]);
    Route::get('tracking2', [
        'uses' => 'MapController@tracking2',
        'as' => 'maps.tracking2',
    ]);
    Route::get('tracking3', [
        'uses' => 'MapController@tracking3',
        'as' => 'maps.tracking3',
    ]);

});
