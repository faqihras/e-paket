<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class Usersession extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'user_sessions';

        /**
        * The attributes that are mass assignable.
        *
        * @var array
        */
       protected $fillable = array('usesUserId');
        
	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
//	protected $hidden = array('password', 'remember_token');

	protected $attributes = array();
}
