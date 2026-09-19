import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {extname,join} from 'node:path';
import {chromium,expect} from '@playwright/test';
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};
const server=createServer(async(req,res)=>{try {const path=decodeURIComponent(req.url.split('?')[0]);const file=join(process.cwd(),'dist',path==='/'?'index.html':path);res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream'});res.end(await readFile(file));}catch {res.writeHead(404);res.end();}});
await new Promise(r=>server.listen(4175,r));
const browser=await chromium.launch({args:['--no-sandbox']});
const errors=[];
try {
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>{Object.defineProperty(navigator,'hardwareConcurrency',{value:8});Object.defineProperty(navigator,'deviceMemory',{value:8});});
 await page.goto('http://localhost:4175/');
 await page.waitForTimeout(250);
 console.log('First intro:',await page.locator('html').getAttribute('class'));
 console.log('Intro title opacity:',await page.locator('h1').evaluate(el=>getComputedStyle(el).opacity));
 await page.waitForTimeout(3100);
 await page.reload();await page.waitForTimeout(100);
 console.log('Repeat intro class:',await page.locator('html').getAttribute('class'));
 await page.locator('.game-card').first().click();
 for(const answer of [1,2,3,0,1,0]){await page.locator('.quiz-option').nth(answer).click();await expect(page.locator('.quiz-option.is-correct')).toHaveCount(1);await page.locator('.game-next').click();await page.waitForTimeout(100);}
 await expect(page.locator('.game-result h2')).toContainText('6 / 6');
 console.log('Perfect quiz saved:',await page.evaluate(()=>JSON.parse(localStorage.getItem('qazaq-tili-progress-v1')).games.quiz));
 await page.keyboard.press('Escape');await page.waitForTimeout(300);
 await page.locator('.game-card').nth(2).click();
 for(const [a,b] of [['Отан','Родина'],['Білім','Знание'],['Достық','Дружба'],['Мұра','Наследие']]){await page.getByRole('button',{name:a,exact:true}).click();await page.getByRole('button',{name:b,exact:true}).click();}
 await expect(page.locator('.game-result h2')).toHaveText('Барлық жұп табылды!');
 console.log('Matching complete');
 await page.keyboard.press('Escape');await page.waitForTimeout(300);
 await page.locator('.game-card').nth(1).click();
 for(const word of ['ҚАЗАҚ','ДОМБЫРА','МҰРА']){
  for(const letter of word)await page.locator('.letter-tile:not(:disabled)').filter({hasText: new RegExp(`^${letter}$`)}).first().click();
  await page.locator('.game-next').click();await page.waitForTimeout(150);
  await page.locator('.game-next').click();await page.waitForTimeout(150);
 }
 await expect(page.locator('.game-result h2')).toHaveText('Сөз шебері!');
 console.log('All games:',await page.evaluate(()=>JSON.parse(localStorage.getItem('qazaq-tili-progress-v1')).games));
 await page.keyboard.press('Escape');await page.waitForTimeout(300);
 await page.locator('#explore .section-heading .section-link').click();
 await page.locator('.search-field input').fill('Абай');
 await expect(page.locator('.lesson-list-item')).toHaveCount(1);
 await page.locator('.search-field input').fill('xxxxxxxxxxxx');
 await expect(page.locator('.empty-state')).toBeVisible();
 await page.locator('.search-field .icon-button').click();
 await expect(page.locator('.lesson-list-item')).toHaveCount(12);
 console.log('Catalog search and reset passed');
 await page.keyboard.press('Escape');await page.waitForTimeout(300);
 await page.locator('#heritage').scrollIntoViewIfNeeded();await page.waitForTimeout(1000);
 await page.locator('.gallery-filters button').nth(1).click();await expect(page.locator('#heritage .gallery-card')).toHaveCount(2);
 await page.waitForFunction(()=>[...document.querySelectorAll('#heritage .gallery-card img')].every(el=>el.complete&&el.naturalWidth>0));
 await page.screenshot({path:'reference/v2-portraits.png'});
 console.log('Portraits loaded');
 await page.locator('.gallery-filters button').first().click();
 for(let i=0;i<6;i++){
  const btn=page.locator('.map-region-buttons button').nth(i);const name=(await btn.innerText()).trim();await btn.click();await expect(page.locator('.map-info-copy h3')).toHaveText(name);await expect(btn).toHaveAttribute('aria-pressed','true');
 }
 await page.locator('.map-reset').click();await expect(page.locator('.map-info-copy h3')).toHaveText('Ұлы даланы бірге ашайық.');
 await page.locator('.map-region').nth(4).focus();await page.keyboard.press('Enter');await expect(page.locator('.map-info-copy h3')).toHaveText('Оңтүстік Қазақстан');
 console.log('All map selections, reset and keyboard passed');
 await page.locator('.route-stage').nth(2).click();await expect(page.locator('.catalog-panel h2')).toHaveText('Салт-дәстүр');await page.keyboard.press('Escape');await page.waitForTimeout(300);
 await page.locator('.journey-rail button').first().click();await expect(page.locator('.catalog-panel h2')).toHaveText('Тіл әлемі');await page.keyboard.press('Escape');await page.waitForTimeout(300);
 console.log('Journey navigation passed');
 for(const width of [820,1024,1280,1920]){
  const tablet=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
  await tablet.goto('http://localhost:4175/');
  const overflow=await tablet.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
  console.log(`Viewport ${width} overflow`,overflow);
  if(overflow)throw new Error('Overflow at '+width);
  if(width===820||width===1280)await tablet.screenshot({path:`reference/v2-${width}.png`});
  await tablet.close();
 }
 console.log('Browser errors:',errors);
 if(errors.length)throw new Error(errors.join(';'));
} finally {await browser.close();server.close();}
