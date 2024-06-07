import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './create-post.model';

@Injectable()
export class Postservice {
    postchanged = new Subject<Post[]>();
    
    private posts: Post[] = [

        new Post(
            'First Blog',
            'This is the first blog',
            'Image1',
        ),
        new Post(
            'Second Blog',
            'This is the second blog',
            'Image2',
        ),
    ];


    getPost(){
        return this.posts.slice();
    }
}