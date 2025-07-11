// Tested Module
import { describe, test, expect, Mock } from 'vitest'
import getMockReq from '../../../request/request'

describe('request - Defaults from "express.Response" (accepts no arguments and return default values)', () => {
  test('req.params is an empty object', () => {
    const req = getMockReq()

    expect(req.params).toBeDefined()
    expect(req.params).toBeInstanceOf(Object)
    expect(Object.keys(req.params).length).toBe(0)
  })

  test('req.query is an empty object', () => {
    const req = getMockReq()

    expect(req.query).toBeDefined()
    expect(req.query).toBeInstanceOf(Object)
    expect(Object.keys(req.query).length).toBe(0)
  })

  test('req.body is an empty object', () => {
    const req = getMockReq()

    expect(req.body).toBeDefined()
    expect(req.body).toBeInstanceOf(Object)
    expect(Object.keys(req.body).length).toBe(0)
  })

  test('req.cookies is an empty object', () => {
    const req = getMockReq()

    expect(req.cookies).toBeDefined()
    expect(req.cookies).toBeInstanceOf(Object)
    expect(Object.keys(req.cookies).length).toBe(0)
  })

  test('req.method is an empty string', () => {
    const req = getMockReq()

    expect(req.method).toBeDefined()
    expect(req.method).toBe('')
  })

  test('req.protocol is an empty string', () => {
    const req = getMockReq()

    expect(req.protocol).toBeDefined()
    expect(req.protocol).toBe('')
  })

  test('req.secure is a boolean', () => {
    const req = getMockReq()

    expect(req.secure).toBeDefined()
    expect(req.secure).toBe(false)
  })

  test('req.ip is an empty string', () => {
    const req = getMockReq()

    expect(req.ip).toBeDefined()
    expect(req.ip).toBe('')
  })

  test('req.ips is an empty array', () => {
    const req = getMockReq()

    expect(req.ips).toBeDefined()
    expect(Array.isArray(req.ips)).toBe(true)
    expect(req.ips.length).toBe(0)
  })

  test('req.subdomains is an empty array', () => {
    const req = getMockReq()

    expect(req.subdomains).toBeDefined()
    expect(Array.isArray(req.subdomains)).toBe(true)
    expect(req.subdomains.length).toBe(0)
  })

  test('req.path is an empty string', () => {
    const req = getMockReq()

    expect(req.path).toBeDefined()
    expect(req.path).toBe('')
  })

  test('req.hostname is an empty string', () => {
    const req = getMockReq()

    expect(req.hostname).toBeDefined()
    expect(req.hostname).toBe('')
  })

  test('req.host is an empty string', () => {
    const req = getMockReq()

    expect(req.host).toBeDefined()
    expect(req.host).toBe('')
  })

  test('req.fresh is a boolean', () => {
    const req = getMockReq()

    expect(req.fresh).toBeDefined()
    expect(req.fresh).toBe(false)
  })

  test('req.stale is a boolean', () => {
    const req = getMockReq()

    expect(req.stale).toBeDefined()
    expect(req.stale).toBe(false)
  })

  test('req.xhr is a boolean', () => {
    const req = getMockReq()

    expect(req.xhr).toBeDefined()
    expect(req.xhr).toBe(false)
  })

  test('req.route is an empty object', () => {
    const req = getMockReq()

    expect(req.route).toBeDefined()
    expect(req.route).toBeInstanceOf(Object)
    expect(Object.keys(req.route).length).toBe(0)
  })

  test('req.signedCookies is an empty object', () => {
    const req = getMockReq()

    expect(req.signedCookies).toBeDefined()
    expect(req.signedCookies).toBeInstanceOf(Object)
    expect(Object.keys(req.signedCookies).length).toBe(0)
  })

  test('req.originalUrl is an empty string', () => {
    const req = getMockReq()

    expect(req.originalUrl).toBeDefined()
    expect(req.originalUrl).toBe('')
  })

  test('req.url is an empty string', () => {
    const req = getMockReq()

    expect(req.url).toBeDefined()
    expect(req.url).toBe('')
  })

  test('req.baseUrl is an empty string', () => {
    const req = getMockReq()

    expect(req.baseUrl).toBeDefined()
    expect(req.baseUrl).toBe('')
  })

  test('req.accepted is an empty array', () => {
    const req = getMockReq()

    expect(req.accepted).toBeDefined()
    expect(Array.isArray(req.accepted)).toBe(true)
    expect(req.accepted.length).toBe(0)
  })

  test('req.get is a mocked function', () => {
    const req = getMockReq()

    expect(req.get).toBeDefined()
    expect(typeof req.get).toBe('function')
    expect((req.get as Mock).getMockName()).toBe('get mock default')
  })

  test('req.header is a mocked function', () => {
    const req = getMockReq()

    expect(req.header).toBeDefined()
    expect(typeof req.header).toBe('function')
    expect((req.header as Mock).getMockName()).toBe('header mock default')
  })

  test('req.accepts is a mocked function', () => {
    const req = getMockReq()

    expect(req.accepts).toBeDefined()
    expect(typeof req.accepts).toBe('function')
    expect((req.accepts as Mock).getMockName()).toBe('accepts mock default')
  })

  test('req.acceptsCharsets is a mocked function', () => {
    const req = getMockReq()

    expect(req.acceptsCharsets).toBeDefined()
    expect(typeof req.acceptsCharsets).toBe('function')
    expect((req.acceptsCharsets as Mock).getMockName()).toBe('acceptsCharsets mock default')
  })

  test('req.acceptsEncodings is a mocked function', () => {
    const req = getMockReq()

    expect(req.acceptsEncodings).toBeDefined()
    expect(typeof req.acceptsEncodings).toBe('function')
    expect((req.acceptsEncodings as Mock).getMockName()).toBe('acceptsEncodings mock default')
  })

  test('req.acceptsLanguages is a mocked function', () => {
    const req = getMockReq()

    expect(req.acceptsLanguages).toBeDefined()
    expect(typeof req.acceptsLanguages).toBe('function')
    expect((req.acceptsLanguages as Mock).getMockName()).toBe('acceptsLanguages mock default')
  })

  test('req.range is a mocked function', () => {
    const req = getMockReq()

    expect(req.range).toBeDefined()
    expect(typeof req.range).toBe('function')
    expect((req.range as Mock).getMockName()).toBe('range mock default')
  })

  test('req.is is a mocked function', () => {
    const req = getMockReq()

    expect(req.is).toBeDefined()
    expect(typeof req.is).toBe('function')
    expect((req.is as Mock).getMockName()).toBe('is mock default')
  })

  test('req.app is an empty object', () => {
    const req = getMockReq()

    expect(req.app).toBeDefined()
    expect(req.app).toBeInstanceOf(Object)
    expect(Object.keys(req.app).length).toBe(0)
  })

  test('req.res is a mocked function', () => {
    const req = getMockReq()

    expect(req.res).toBeDefined()
    expect(typeof req.res).toBe('function')
    expect((req.res as unknown as Mock).getMockName()).toBe('res mock default')
  })

  test('req.next is a mocked function', () => {
    const req = getMockReq()

    expect(req.next).toBeDefined()
    expect(typeof req.next).toBe('function')
    expect((req.next as Mock).getMockName()).toBe('next mock default')
  })
})
