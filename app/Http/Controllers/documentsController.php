<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \Serverfireteam\Panel\CrudController;

use Illuminate\Http\Request;

class documentsController extends CrudController
{

    public function all($entity)
    {
        parent::all($entity);

        $this->filter = \DataFilter::source(new \App\documents);
        $this->filter->add('title', 'Title', 'text');
        $this->filter->submit('search');
        $this->filter->reset('reset');
        $this->filter->build();

        $this->grid = \DataGrid::source($this->filter);
        $this->grid->add('doc_url', 'DocUrl');
        $this->grid->add('caption_heading', 'CaptionHeading');


        $this->addStylesToGrid();

        return $this->returnView();

    }

    public function edit($entity)
    {

        parent::edit($entity);

        $this->edit = \DataEdit::source(new \App\documents);

        $this->edit->label('Edit Documents');

        $this->edit->add('caption_heading', 'CaptionHeading', 'text');


        $this->edit->add('doc_url', 'DocUrl', 'file');









        return $this->returnEditView();
    }
}
