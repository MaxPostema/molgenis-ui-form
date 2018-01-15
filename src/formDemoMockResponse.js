const metadata = {
  'href': '/api/v2/it_emx_datatypes_TypeTest',
  'hrefCollection': '/api/v2/it_emx_datatypes_TypeTest',
  'name': 'it_emx_datatypes_TypeTest',
  'label': 'TypeTest',
  'description': 'MOLGENIS Data types test entity',
  'attributes': [
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/string',
      'fieldType': 'STRING',
      'name': 'string',
      'label': 'String Field',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'visible': true,
      'description': 'STRING description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/text',
      'fieldType': 'TEXT',
      'name': 'text',
      'label': 'Text Field',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'visibleExpression': '$("string").value() === "show"',
      'description': 'TEXT description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/boolean',
      'fieldType': 'BOOL',
      'name': 'boolean',
      'label': 'Boolean Field',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'Boolean description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/integer',
      'fieldType': 'INT',
      'name': 'integer',
      'label': 'Integer Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'Integer description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/long',
      'fieldType': 'LONG',
      'name': 'long',
      'label': 'Long Field',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'Long description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/decimal',
      'fieldType': 'DECIMAL',
      'name': 'decimal',
      'label': 'Decimal Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'Decimal description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/html',
      'fieldType': 'HTML',
      'name': 'html',
      'label': 'HTML Field',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'HTML description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/hyperlink',
      'fieldType': 'HYPERLINK',
      'name': 'hyperlink',
      'label': 'Hyperlink Field',
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'HYPERLINK description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/email',
      'fieldType': 'EMAIL',
      'name': 'email',
      'label': 'EMAIL Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'EMAIL description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/enum',
      'fieldType': 'ENUM',
      'name': 'enum',
      'label': 'ENUM Field',
      'enumOptions': [
        'enum1',
        'enum2',
        'enum3'
      ],
      'attributes': [],
      'auto': false,
      'nillable': true,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'ENUM description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/date',
      'fieldType': 'DATE',
      'name': 'date',
      'label': 'DATE Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'DATE description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/date_time',
      'fieldType': 'DATE_TIME',
      'name': 'date_time',
      'label': 'DATE_TIME Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'DATE_TIME description'
    },
    {
      'href': '/api/v1/it_emx_datatypes_TypeTest/meta/categorical',
      'fieldType': 'CATEGORICAL',
      'name': 'categorical',
      'label': 'CATEGORICAL Field',
      'description': 'CATEGORICAL description',
      'attributes': [],
      'enumOptions': [],
      'refEntity': {
        'href': '/api/v1/it_emx_datatypes_TypeTestRef/meta',
        'hrefCollection': '/api/v1/it_emx_datatypes_TypeTestRef',
        'idAttribute': 'value',
        'labelAttribute': 'label',
        'languageCode': 'en',
        'writable': true
      },
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'defaultValue': 'ref1',
      'labelAttribute': false,
      'unique': false,
      'visible': true,
      'lookupAttribute': false,
      'isAggregatable': false
    },
    {
      'href': '/api/v1/it_emx_datatypes_TypeTest/meta/categorical_mref',
      'fieldType': 'CATEGORICAL_MREF',
      'name': 'categorical_mref',
      'label': 'CATEGORICAL_MREF Field',
      'description': 'CATEGORICAL_MREF description',
      'attributes': [],
      'enumOptions': [],
      'refEntity': {
        'href': '/api/v1/it_emx_datatypes_TypeTestRef/meta',
        'hrefCollection': '/api/v1/it_emx_datatypes_TypeTestRef',
        'idAttribute': 'value',
        'languageCode': 'en',
        'writable': true
      },
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'defaultValue': 'ref1',
      'labelAttribute': false,
      'unique': false,
      'visible': true,
      'lookupAttribute': false,
      'isAggregatable': false
    },
    {
      'href': '/api/v1/it_emx_datatypes_TypeTest/meta/xref',
      'fieldType': 'XREF',
      'name': 'xref-field',
      'label': 'XREF Field',
      'description': 'XREF description',
      'attributes': [],
      'enumOptions': [],
      'refEntity': {
        'href': '/api/v1/it_emx_datatypes_TypeTestRef/meta',
        'hrefCollection': '/api/v1/it_emx_datatypes_TypeTestRef',
        'idAttribute': 'value',
        'labelAttribute': 'label',
        'languageCode': 'en',
        'writable': true
      },
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'defaultValue': 'ref1',
      'labelAttribute': false,
      'unique': false,
      'visible': true,
      'lookupAttribute': false,
      'isAggregatable': false
    },
    {
      'href': '/api/v1/it_emx_datatypes_TypeTest/meta/mref',
      'fieldType': 'MREF',
      'name': 'mref-field',
      'label': 'MREF Field',
      'description': 'MREF description',
      'attributes': [],
      'enumOptions': [],
      'refEntity': {
        'href': '/api/v1/it_emx_datatypes_TypeTestRef/meta',
        'hrefCollection': '/api/v1/it_emx_datatypes_TypeTestRef',
        'idAttribute': 'value',
        'labelAttribute': 'label',
        'languageCode': 'en',
        'writable': true
      },
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'defaultValue': 'ref1',
      'labelAttribute': false,
      'unique': false,
      'visible': true,
      'lookupAttribute': false,
      'isAggregatable': false
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/file',
      'fieldType': 'FILE',
      'name': 'file',
      'label': 'FILE Field',
      'attributes': [],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': true,
      'unique': true,
      'visible': true,
      'lookupAttribute': true,
      'isAggregatable': false,
      'description': 'FILE description'
    },
    {
      'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound',
      'fieldType': 'COMPOUND',
      'name': 'compound-field',
      'label': 'Compound field',
      'description': 'Compound description',
      'attributes': [
        {
          'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound_int',
          'fieldType': 'INT',
          'name': 'compound-int',
          'label': 'Compound integer field',
          'attributes': [],
          'auto': false,
          'nillable': false,
          'readOnly': false,
          'defaultValue': '1',
          'labelAttribute': false,
          'unique': false,
          'visible': true,
          'lookupAttribute': false,
          'isAggregatable': true,
          'description': 'Cool Integer child description'
        },
        {
          'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound',
          'fieldType': 'COMPOUND',
          'name': 'nested-compound-field',
          'label': 'Nested Compound field',
          'description': 'Nested Compound description',
          'attributes': [
            {
              'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound_int',
              'fieldType': 'ENUM',
              'name': 'nested-compound-enum',
              'label': 'An enum, inside a compound, inside a compound',
              'attributes': [],
              'enumOptions': ['enum1', 'enum2', 'enum3'],
              'auto': false,
              'nillable': true,
              'readOnly': false,
              'defaultValue': '1',
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': true,
              'description': 'Cool Nested enumceptions'
            },
            {
              'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound_string',
              'fieldType': 'STRING',
              'name': 'nested-compound-string',
              'label': 'Nested Compound string field',
              'description': 'TypeTest compound string attribute',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'defaultValue': 'xcompound_string',
              'labelAttribute': false,
              'unique': false,
              'visible': true,
              'lookupAttribute': false,
              'isAggregatable': true
            },
            {
              'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound_string',
              'fieldType': 'LONG',
              'name': 'nested-compound-long',
              'label': 'Nested Compound Long field',
              'description': 'TypeTest compound long attribute',
              'attributes': [],
              'maxLength': 255,
              'auto': false,
              'nillable': false,
              'readOnly': false,
              'labelAttribute': false,
              'unique': false,
              'visible': false,
              'lookupAttribute': false,
              'isAggregatable': true
            }
          ],
          'auto': false,
          'nillable': false,
          'readOnly': false,
          'labelAttribute': false,
          'unique': false,
          'visible': true,
          'lookupAttribute': false,
          'isAggregatable': false
        },
        {
          'href': '/api/v2/it_emx_datatypes_TypeTest/meta/xcompound_string',
          'fieldType': 'STRING',
          'name': 'compound-string',
          'label': 'Compound string field',
          'description': 'TypeTest compound string attribute',
          'attributes': [],
          'maxLength': 255,
          'auto': false,
          'nillable': false,
          'readOnly': false,
          'defaultValue': 'xcompound_string',
          'labelAttribute': false,
          'unique': false,
          'lookupAttribute': false,
          'isAggregatable': true,
          'visibleExpression': '$("nested-compound-string").value() === "show"',
          'nullableExpression': '$("compound-int").value() === 1',
          'validationExpression': '$("compound-string").value() === "valid"'
        }],
      'auto': false,
      'nillable': false,
      'readOnly': false,
      'labelAttribute': false,
      'unique': false,
      'visible': true,
      'lookupAttribute': false,
      'isAggregatable': false
    }
  ]
}

const items = {
  string: 'string value',
  text: 'text value',
  hyperlink: 'www.nu.nl',
  categorical_mref: ['ref1', 'ref2'],
  enum: 'enum2'
}

export default {
  metadata, items
}
