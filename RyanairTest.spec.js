// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
    await page.goto('https://www.ryanair.com/pt/pt');
    await page.getByRole('button', { name: 'Não, obrigado' }).click();
    await page.getByPlaceholder('Destino').click();
    await page.getByPlaceholder('Destino').fill('');
    await page.getByRole('button', { name: 'Regiões' }).click();
    await page.getByRole('button', { name: 'Destino ou país' }).click();
    await page.getByRole('button', { name: 'Itália' }).click();
    await page.getByRole('button', { name: 'Milão (Todos os aeroportos)' }).click();
    await page.locator('.datepicker__calendars > div:nth-child(4)').click();
    await page.getByText('14').nth(1).click();
    await page.getByText('16').nth(1).click();
    await page.getByLabel('Feito').click();
    await page.getByLabel('Pesquisar').click();
    await page.locator('flight-card-summary').filter({ hasText: 'Tarifa Basic 31,99 € 30,25 €' }).getByRole('button').click();
    await page.locator('flight-card-summary').filter({ hasText: 'Tarifa Basic 127,99 € 119,07' }).getByRole('button').click();
    await page.getByRole('columnheader', { name: 'Image that represents standard fare Basic Viaja sem peso Continuar para € 149 ,' }).locator('div').nth(4).click();
    await page.getByRole('button', { name: 'Continuar com Basic' }).click();
    await expect(page.getByText('Iniciar sessão mais tarde Iniciar sessão em myRyanair antes de continuares a')).toBeVisible();
  });