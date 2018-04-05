import Vue from 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.esm.browser.js'
import { getVals, binOps, stringify } from './ops.js'

const app = new Vue({
    el: '#app',
    data: {
      aVals: getVals(),
      bVals: getVals(),
      binOps,
      selectedOp: binOps[0],
      selectedA: undefined,
      selectedB: undefined,
    },
    methods: {
        stringify,
    },
    computed: {
        table() {
            return this.aVals
                .map(a => {
                    return this.bVals.map(b => this.selectedOp.action(a.value, b.value))
                })
        },
        expression() {
            if (this.selectedA === undefined || this.selectedB === undefined ) {
                return 'Hover over a cell to see its value'
            }
            const a = this.aVals[this.selectedA]
            const b = this.bVals[this.selectedB]
            const op = this.selectedOp
            const result = op.action(a.value, b.value)
            return `(${a.text} ${op.text} ${b.text})  ➡   ${stringify(result)}`
        },
    },
  })