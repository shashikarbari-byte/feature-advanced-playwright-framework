import { test, expect } from '@playwright/test';
import { apiProductPayload } from '../../utils/test-data';

const API_BASE_URL = process.env.API_BASE_URL || 'https://dummyjson.com';

test.describe('Products API', () => {
  test('GET products returns product collection', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/products?limit=10`);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.products).toBeInstanceOf(Array);
    expect(body.products.length).toBeGreaterThan(0);
  });

  test('GET product by id returns product details', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/products/1`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('price');
  });

  test('POST product validates request payload', async ({ request }) => {
    const response = await request.post(`${API_BASE_URL}/products/add`, { data: apiProductPayload });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe(apiProductPayload.title);
    expect(body.price).toBe(apiProductPayload.price);
  });

  test('invalid product id returns 404', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/products/999999`);
    expect(response.status()).toBe(404);
  });
});
