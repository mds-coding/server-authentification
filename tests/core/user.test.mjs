import assert from 'node:assert';
import test from 'node:test';
import { User } from '../../src/core/user.mjs';
import { AbstractEntity } from '../../src/core/AbstractEntity.mjs';

test('Can create a user and check password', async () => {
  const id = "userId1";
  const password = "MySuperSecretPassword";
  const user = await User.create(id, password);
  assert.strictEqual(user.id, id);
  assert.notStrictEqual(user.hashedPassword, password);
  assert.strictEqual(await user.checkPassword("WrongPassword"), false);
  assert.strictEqual(await user.checkPassword(password), true);
  assert.ok(user instanceof AbstractEntity);
  assert.strictEqual(user.getCollection(), "user");
})

