<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAboutusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aboutus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('address');
            $table->string('email');
            $table->string('mobile');
            $table->string('title1');
            $table->string('title2');
            $table->string('logo');
            $table->string('imageabout');
            $table->string('imagemission');
            $table->string('imagevision');
            $table->string('imageobjective');
            $table->string('imagecorevalue');
            $table->string('imagechooseus');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('aboutus');
    }
}
