customProperties:"formComponent:false",
dataSource:"db:/example_data/orders",
encapsulation:60,
items:[
{
anchors:11,
dataProviderID:"orders_to_customers.companyname",
location:"0,155",
name:"companyname",
size:"170,30",
transparent:true,
typeid:7,
uuid:"027EEBE1-FC9B-4463-ACAA-2D589E71B9B8"
},
{
height:190,
partType:5,
typeid:19,
uuid:"0B450BF6-3783-43FE-9477-B3F7F4137DB0"
},
{
anchors:11,
dataProviderID:"orders_to_employees.display_full_name",
formIndex:3,
location:"170,155",
name:"employeeid",
size:"150,30",
transparent:true,
typeid:7,
uuid:"21B0C97C-0182-4467-8AAA-03099A31CF0E"
},
{
anchors:11,
labelFor:"companyname",
location:"0,135",
name:"companyname_label",
size:"170,20",
text:"Customer",
transparent:true,
typeid:7,
uuid:"328B8D77-654A-44DD-A90B-EA5139C1B717"
},
{
anchors:11,
dataProviderID:"orderdate",
format:"MM/dd/yyyy",
location:"320,155",
name:"orderdate",
size:"140,30",
transparent:true,
typeid:7,
uuid:"47AF6658-5786-40F1-88F1-E7F7308B6842"
},
{
anchors:11,
formIndex:2,
labelFor:"employeeid",
location:"170,135",
name:"employeeid_label",
size:"150,20",
text:"Sales Rep",
transparent:true,
typeid:7,
uuid:"7A3867EB-7FC8-439D-9D90-D5B342C91EE9"
},
{
customProperties:"attributes:{\
keylistener:\"searchKeyListener\"\
}",
location:"10,69",
name:"pw",
placeholderText:"Enter Search...",
size:"353,30",
typeid:4,
uuid:"86C112BF-C10E-4DF8-994E-A1AF218F9792"
},
{
anchors:11,
labelFor:"shipcountry",
location:"460,135",
name:"shipcountry_label",
size:"140,20",
text:"Shipcountry",
transparent:true,
typeid:7,
uuid:"87C5EA89-D105-43FF-A496-49CEB4D331D6"
},
{
anchors:3,
location:"410,96",
name:"addListener",
onActionMethodID:"AD94D58C-F847-4677-81DD-4C94E21629A5",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"225,30",
text:"Add Listener to search field",
typeid:7,
uuid:"8C3FB17D-C8BE-4145-8413-3DF9CBA6A02C"
},
{
anchors:11,
dataProviderID:"shipcountry",
location:"460,155",
name:"shipcountry",
size:"140,30",
transparent:true,
typeid:7,
uuid:"8F413AEB-007E-4AF9-8510-E56CB0463723"
},
{
height:130,
partType:1,
typeid:19,
uuid:"A30D9CC5-9B62-4E25-BA9B-75F71488AB8C"
},
{
anchors:11,
labelFor:"orderdate",
location:"320,135",
name:"orderdate_label",
size:"140,20",
text:"Date",
transparent:true,
typeid:7,
uuid:"A8C7C5EE-35C8-48FD-8382-A856485D98D4"
},
{
anchors:11,
displaysTags:true,
location:"10,100",
name:"matchingCount",
size:"353,26",
styleClass:"info",
text:"Matching order records: <b>%%count_orders%%<\/b>",
transparent:true,
typeid:7,
uuid:"CAD9126C-8360-4190-A086-34ADC596CC86"
}
],
name:"keyListenerExample",
namedFoundSet:"separate",
scrollbars:32,
showInMenu:true,
typeid:3,
uuid:"8E2C7D65-B834-45FC-B209-CB87041D071F",
view:3