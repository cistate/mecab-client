import { Lexical } from './Lexical'

/**
 * Word type.
 */
export type Word = {
  /**
   * 表層系
   */
  surface: string

  /**
   * 品詞
   */
  lexical: Lexical

  /**
   * 品詞細分類1
   */
  compound1: string

  /**
   * 品詞細分類2
   */
  compound2: string

  /**
   * 品詞細分類3
   */
  compound3: string

  /**
   * 活用型
   */
  conjugation: string

  /**
   * 活用形
   */
  inflection: string

  /**
   * 原型
   */
  original: string

  /**
   * 読み
   */
  reading: string

  /**
   * 発音
   */
  pronunciation?: string

  /**
   * 形態素種類
   * %s 形態素種類 (0: 通常, 1: 未知語, 2:文頭, 3:文末)
   */
  type?: string

  /**
   * %c 単語生起コスト
   */
  cost?: number
}
