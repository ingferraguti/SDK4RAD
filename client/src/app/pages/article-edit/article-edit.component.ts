/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5cadd42d3e3a57575017471b
*
* You will get 10% discount for each one of your friends
* 
*/
// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ArticleService } from '../../services/article.service';
// Import Models
import { Article } from '../../domain/sdk4rad_db/article';
import { Processing } from '../../domain/sdk4rad_db/processing';

// START - USED SERVICES
/**
* ArticleService.create
*	@description CRUD ACTION create
*
* ArticleService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* ArticleService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Article
 */
@Component({
    selector: 'app-article-edit',
    templateUrl: 'article-edit.component.html',
    styleUrls: ['article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
    item: Article;
    listProcessing: Processing[];
    model: Article;
    formValid: Boolean;

    constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Article();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.articleService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.processingService.list().subscribe(list => this.listProcessing = list);
        });
    }

    /**
     * Check if an Processing is in  processing
     *
     * @param {string} id Id of Processing to search
     * @returns {boolean} True if it is found
     */
    containProcessing(id: string): boolean {
        if (!this.item.processing) return false;
        return this.item.processing.indexOf(id) !== -1;
    }

    /**
     * Add Processing from Article
     *
     * @param {string} id Id of Processing to add in this.item.processing array
     */
    addProcessing(id: string) {
        if (!this.item.processing)
            this.item.processing = [];
        this.item.processing.push(id);
    }

    /**
     * Remove an Processing from a Article
     *
     * @param {number} index Index of Processing in this.item.processing array
     */
    removeProcessing(index: number) {
        this.item.processing.splice(index, 1);
    }

    /**
     * Save Article
     *
     * @param {boolean} formValid Form validity check
     * @param Article item Article to save
     */
    save(formValid: boolean, item: Article): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.articleService.update(item).subscribe(data => this.goBack());
            } else {
                this.articleService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}


