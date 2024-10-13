import assert from 'node:assert';
import test from 'node:test';
import { Session } from '../../src/core/session.mjs';

test('Can create a session', async () => {
  const session = new Session("sessionId", "userId");
  assert.ok(session);
})

