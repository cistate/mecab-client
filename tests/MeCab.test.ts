import { MeCab } from '../src/classes/MeCab'
import path from 'path'

jest.setTimeout(10000)

describe('MeCab class test.', () => {
  test('should parse', async () => {
    const mecab = new MeCab(
      path.join(__dirname, '..', '..', 'cistate-ipadic-industrial')
    )
    const source = 'これはASSYです。'

    const result = await mecab.parse(source)

    expect(result).toMatchObject([
      {
        surface: 'これ',
        pos: '名詞,代名詞,一般',
        conjugation: '*',
        inflection: '*',
        original: 'これ',
        reading: 'コレ',
        pronunciation: 'コレ',
        type: '通常',
        cost: '3304',
      },
      {
        surface: 'は',
        pos: '助詞,係助詞',
        conjugation: '*',
        inflection: '*',
        original: 'は',
        reading: 'ハ',
        pronunciation: 'ワ',
        type: '通常',
        cost: '3865',
      },
      {
        surface: 'ASSY',
        pos: '名詞,一般',
        conjugation: '*',
        inflection: '*',
        original: '*',
        reading: '*',
        pronunciation: '*',
        type: '未知語',
        cost: '13398',
      },
      {
        surface: 'です',
        pos: '助動詞',
        conjugation: '特殊・デス',
        inflection: '基本形',
        original: 'です',
        reading: 'デス',
        pronunciation: 'デス',
        type: '通常',
        cost: '4063',
      },
      {
        surface: '。',
        pos: '記号,句点',
        conjugation: '*',
        inflection: '*',
        original: '。',
        reading: '。',
        pronunciation: '。',
        type: '通常',
        cost: '215',
      },
    ])
  })
})
