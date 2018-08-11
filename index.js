const uuid = require("uuid/v4");

/**
 * Create a new table.
 *
 * @param {object} data
 * @param {string} data.name Table name shown in Header
 * @param {object[]} data.options Options created with 'createOption' helper
 * @param {object} data.position Table position in WorkArea
 * @param {number} data.position.x
 * @param {number} data.position.y
 * @return {object} Created Table
 */
const createTable = ({ name, position, options }) => ({
  id: uuid(),
  name,
  timestamp: Date.now(),
  position,
  options
});

/**
 * Create new field.
 *
 * @param {object} data
 * @param {string} tableID ID from table which contains this field
 * @param {string} name Field name
 * @param {string} type Field data type based on extension
 * @return {object} Created Field
 */
const createField = ({ tableID, name, type }) => ({
  id: uuid(),
  tableID,
  name,
  type
});

/**
 * Create new table option checkbox.
 *
 * @param {object} data
 * @param {string} data.id Camel cased Label as ID (i.e. rememberToken)
 * @param {string} data.label Label which shown in table
 * @param {boolean} [data.isChecked=false] Is option checked or not
 * @return {object} Created Option
 */
const createOption = ({ id, label, isChecked = false }) => ({
  id,
  label,
  isChecked
});

/**
 * Create new relation.
 *
 * @param {object} data
 * @param {string} data.fieldID Camel cased Label as ID (i.e. rememberToken)
 * @param {string} data.fromTableID ID of table which contains foreign key
 * @param {string} data.toTableID ID of table destination
 * @return {object} Created Relation
 */
const createRelation = ({ fieldID, fromTableID, toTableID }) => ({
  id: uuid(),
  fieldID,
  fromTableID,
  toTableID
});

module.exports = {
  createTable,
  createField,
  createOption,
  createRelation
};
