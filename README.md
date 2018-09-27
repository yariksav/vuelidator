# Vuelidator

### This package will hwlp you to validate your datas in vue components

<p align="center">
  <a href="https://www.npmjs.org/package/vuetify-dialog">
    <img src="https://img.shields.io/npm/v/vuetify-dialog">
  </a>
</p>


## Setup

Install the package from npm

```npm
npm install vuelidator
```

and use in your component

```js
import Validatable from 'vuelidator/src/validatable'
...

{
  mixins: [ Validatable ]
  ...
}
```

## Config validator rules

Rules can be in string format:
'required|min:5|alpha'

To config your data rules fill validationRules in component computed propetry

```js
  ...
  computed: {
    validationRules () {
      return {
        slug: this.isNewRecord && 'required|alpha|min:5|max:16',
        name: 'required|length:5,16',
        permissions: [
          {
            name: 'required',
            message: this.$t('Please select at least one permission')
          }
        ]
      }
    },
  }
```

## Messages

The library tries to get messages from i18n plugin by tag `validators.${rule.name}`
If i18n not instaled, messages will get from default options

If you need own message options, just override `onValidationMessage` method
```js
  methods: {
    onValidationMessage ({ field, rule }) {
      return this.$i18n ? this.$t(`validators.${rule.name}`, rule.args) : rule.name
    },
    ...
```

## Properties wich will add by mixin:

 - `isValid`: checks is all data is valid. In first getter call validation will start in silent mode without provide errors

 - `errors`: objects with error messages by filed name. To show error, just use for instance `v-if="errors.name"`

 - `successes`: object with successed flags by filed name

## Methods

```js
  this.validate() \\ starts validation
  this.validate(rules) \\ starts validation with specific rules
  this.validate(rules, data) \\ starts validation with specific rules and data
```
