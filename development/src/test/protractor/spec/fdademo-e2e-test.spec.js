
//Developers : Anush Varma
//File : Protractor Spec File
//Version : 1.0.0
//Date : 06/24/2015


/*global
 beforeEach: false,
 browser: false,
 by: false,
 describe: false,
 expect: false,
 it: false,
 protractor: false
 */

describe('Example:', function () {
    'use strict';

    beforeEach(function () {
        // Load up a view and wait for it to be done with its rendering and epicycles.
       // browser.waitForAngular();
    });

/*
    it('Verify Home Page', function () {
        browser.get('');
        var continueButton = browser.findElement(by.cssContainingText('.btn-primary', 'Continue'));
        expect(continueButton.isDisplayed()).toBe(true);
        //expect(element.getText()).toBe('Continue');

	
    });

*/
    it('Verify navigation to Search Page', function () {
        browser.get('search/#/');
        var element = browser.findElement(by.css('[ng-click="searchData()"]'));
        expect(element.isDisplayed()).toBe(true);
        expect(element.getText()).toBe('Search');
    });

/*
    it('Verify Map View', function () {
	browser.get('search/#/mapSearch');
        var element = browser.findElement(by.model('dateRange'));
        expect(element.isDisplayed()).toBe(true);
        var element = browser.findElement(by.model('searchCriteria.drug'));
        expect(element.isDisplayed()).toBe(true);
	var element = browser.findElement(by.model('searchCriteria.device'));
        expect(element.isDisplayed()).toBe(true);
	var element = browser.findElement(by.model('searchCriteria.food'));
        expect(element.isDisplayed()).toBe(true);
    });

    it('Verify Search Input', function () {
        browser.get('search/#/');
        var element = browser.findElement(by.model('searchCriteria.states'));
        expect(element.isDisplayed()).toBe(true);
    });


    it('Verify Search Results', function () {
        var element = browser.findElement(by.model('symptom'));
        element.sendKeys('pain')

        var searchButton = browser.findElement(by.css('[ng-click="searchData()"]'));
        searchButton.click();

        browser.waitForAngular();

        var searchList = browser.findElements(by.repeater('y in products.medicinalproduct'));
        var searchList2 = browser.findElements(by.repeater('x in products.reaction'));

        console.log('Search String Entered = Pain');

        searchList.then(function(result){
            console.log('product count ='+result.length);
            expect(result.length).toBeGreaterThan(0);
        });

        searchList2.then(function(result){
            console.log('Reaction count ='+result.length);
            expect(result.length).toBeGreaterThan(0);
        });

    });

*/

});

