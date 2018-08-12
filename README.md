# schemator-utils

Utilites to create extension for [Schemator](https://github.com/gattigaga/schemator).

## Install

using npm :

```bash
$ npm install schemator-utils
```

or using yarn :

```bash
$ yarn add schemator-utils
```

## API

### createTable(data) : object

Create a new table.

#### data.name

Type: 'string'

Name of table and would be shown in header.

#### data.position

Type: 'object'

Position (x, y) of table in work area.

#### data.options

Type: 'object[]'

Table checkbox options which can be created with 'createOption' helper.

### createField(data) : object

Create a new field.

#### data.tableID

Type: 'string'

ID of table which contains this field.

#### data.name

Type: 'string'

Field name which would be shown in input box.

#### data.type

Type: 'string'

Field data type which would be shown in select box (based on fieldTypes in extension).

### createOption(data) : object

Create a new option.

#### data.id

Type: 'string'

Camel cased Label as option ID (i.e. rememberToken).

#### data.label

Type: 'string'

Label which shown in table options.

#### [data.isChecked=false]

Type: 'boolean'

Is option checked or not.

### createRelation(data) : object

Create a new relation.

#### data.fieldID

Type: 'string'

ID of foreign key field.

#### data.fromTableID

Type: 'string'

ID of table which contains foreign key of destination table.

#### data.toTableID

Type: 'string'

ID of destination table.