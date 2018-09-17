// this provider is responsible for the basic tokens CRUD

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// firebase database
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class TokenServiceProvider {

	private PATH = '/tokens/';
	private USER:string;

  constructor(private db: AngularFireDatabase,
  	private fireAuth: AngularFireAuth){
  	this.fireAuth.authState.subscribe(user => {
      if(user) this.USER = user.uid+"/";
    });
  }

  getAll(){
  	return this.db.list(this.PATH+this.USER)
  	.snapshotChanges().pipe(map(changes => {
  		return changes.map(token => ({
  			// data
  			key: token.payload.key,
  			...token.payload.val()
  		}))
  	}));
  }

  get(key: string){
  	return this.db.object(this.PATH+this.USER+key).snapshotChanges()
  	.pipe(map(token =>({
  				// data
  				key: token.payload.key,
  				...token.payload.val()
  			}))
  		);
  }

  save(token: any){
  	return new Promise((resolve, reject) => {
  		// if exists is an update
  		if(token.key){
  			this.db.list(this.PATH+this.USER)
  			.update(token.key, {
  				// data
  				name: token.name,
  				game: token.game
  			}).then(() => resolve())
  			.catch((e) => reject(e));
  		} // if does not exist, is a push
  		else{
  			this.db.list(this.PATH+this.USER)
  			.push({
  				// data
  				name: token.name,
  				game: token.game
  			}).then(() => resolve());
  		}
  	});
  }

  remove(key: string){
  	return this.db.list(this.PATH+this.USER).remove(key);
  }

}