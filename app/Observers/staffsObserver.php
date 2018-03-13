<?php
namespace App\Observers;

use App\staffs;

class staffsObserver
{
    
    /**
     * Listen to the staffs creating event.
     *
     * @param  staffs  $staffs
     * @return void
     */
    public function creating(staffs $staffs)
    {
        //code...
    }

     /**
     * Listen to the staffs created event.
     *
     * @param  staffs  $staffs
     * @return void
     */
    public function created(staffs $staffs)
    {
        //code...
    }

    /**
     * Listen to the staffs updating event.
     *
     * @param  staffs  $staffs
     * @return void
     */
    public function updating(staffs $staffs)
    {
        //code...
    }

    /**
     * Listen to the staffs updated event.
     *
     * @param  staffs  $staffs
     * @return void
     */
    public function updated(staffs $staffs)
    {
        //code...
    }

    /**
     * Listen to the staffs saving event.
     *
     * @param  staffs  $staffs
     * @return void
     */
    public function saving(staffs $staffs)
    {
        //code...
    }

    /**
     * Listen to the staffs saved event.
     *
     * @param  staffs  $staffs
     * @return void
     */
    public function saved(staffs $staffs)
    {
        //code...
    }

    /**
     * Listen to the staffs deleting event.
     *
     * @param  staffs  $staffs
     * @return void
     */
    public function deleting(staffs $staffs)
    {
        //code...
    }

    /**
     * Listen to the staffs deleted event.
     *
     * @param  staffs  $staffs
     * @return void
     */
    public function deleted(staffs $staffs)
    {
        //code...
    }

    /**
     * Listen to the staffs restoring event.
     *
     * @param  staffs  $staffs
     * @return void
     */
    public function restoring(staffs $staffs)
    {
        //code...
    }

    /**
     * Listen to the staffs restored event.
     *
     * @param  staffs  $staffs
     * @return void
     */
    public function restored(staffs $staffs)
    {
        //code...
    }
}