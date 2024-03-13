import { AddRemoveElementPage } from './pages/AddRemoveElements.page';


import {test, expect} from '@playwright/test';
import { HomePage } from './pages/Home.page';

test.describe('Herokuapp Test Suite', async ()=>{
    test('First Test', async ({page}) =>{
        await page.goto('https://the-internet.herokuapp.com/');
        const homePage = new HomePage(page);
        const addRemoveElementPage = new AddRemoveElementPage(page);

        await homePage.addElement.click();
        for(let i = 0; i < 10; i++) {
            await addRemoveElementPage.addElement.click();
        }
        
        let numberOfButtonsPresent = await addRemoveElementPage.getNumberOfElements();
        expect(numberOfButtonsPresent).toBe(10);

        for(let i = 0; i < 10; i++) {
            await addRemoveElementPage.deleteButton(0);
        }
        numberOfButtonsPresent = await addRemoveElementPage.getNumberOfElements();
        expect(numberOfButtonsPresent).toBe(0);


        await page.close();
    })
})
