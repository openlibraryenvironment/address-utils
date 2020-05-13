# address-utils

This is a set of functions and components designed to work across many `address-plugins`. For the most part you shouldn't need to actually access any of these, but they're listed here for posterity.

## Generic information
For the generic information about how these plugins operate, please see [here](https://github.com/openlibraryenvironment/address-plugin-generic/blob/master/README.md). (I'd HIGHLY recommend starting there rather than trying to jump in blind here).

## Functions
This set `address-utils` currently comprises of 3 functions and a component:
- getExistingLineField
- deleteFieldIfExists
- toKebabCase
- AddressTextField

We'll go over these one by one.

### getExistingLineField
This function  accepts an array of `lines` (see the general documentation for more information about what those are) and a string containing the lowercase name of the field you're working on. Those follow the names set out by the general documentation, e.g. `"premise"`.

This function simply parses the array of lines, and returns the one whose `line.type?.value` matches the field `string`, or null if none exist.

(This is **NOT** set up to allow multiple lines of the same type. This function will just return the first one it finds. See the general docs for more information.)

### deleteFieldIfExists
This function accepts the same props as `getExistingLineField` above. It calls `getExistingLineField` in order to find the id of the saved line, and then returns an object `{id: "some_id", _delete:true}` In our backend setup this will delete the line saved with that id, but this may not be universal, and so you may need to write code to mimic this functionality for _your_ backend model wherever it is used.

### toKebabCase
This function simply translates a string into kebab-case.
i.e.
`Northern Ireland -> northern-ireland`

### AddressTextField
This is a simple component which just returns a final-form `Field` with the props passed to it and `parse={v => v}`, which is simply there to allow "empty" inputs such as " " to be submitted. This component accepts props handed to it directly from `AddressFields` from each plugin. See the general documentation for the props expected by that component, as they are simply passed through to here.
