import $ from 'jquery'
import {btnToCopyBtn} from './clipboard'

function initClipboardLinks () {
  btnToCopyBtn($('.btn-clipboard'))
}

export function initPage () {
  initClipboardLinks()
}
