
# Custom Checkbox React Native

It's a React Native checkbox that can be customize.

## Install

Install the package via npm:

```javascript
    npm i react-native-custom-checkbox --save
```

The [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
package is a dependency of this component and it's needed to link it, as you can
read in its installation instructions.

In order to link it to the project first install [rnpm](https://github.com/rnpm/rnpm)

```javascript
    npm install rnpm -g
```

Then run the following command to link the react-native-vector-icons package

```javascript
    rnpm link react-native-vector-icons
```

## Usage

Import the component:

```javascript
    import Checkbox from 'react-native-custom-checkbox';
```

```jsx
<Checkbox
    checked={true}
    style={ {backgroundColor: '#f2f2f2', color:'#900', borderRadius: 5} }
    onChange={(checked) => _myFunction(checked)}/>
```

### Properties

#### checked

Boolean to indicate whether the checkbox start checked or not.

```jsx
<Checkbox
    checked={true}/>
```

#### size

The width and height of the checkbox.

```jsx
<Checkbox
    checked={true}
    size={30}/>
```

## style

Optional object to customize the color, backgroundColor, borderRadius and borderWidth.

```jsx
<Checkbox
    checked={true}
    style={ {backgroundColor: '#f2f2f2', color:'#900', borderRadius: 5, borderWidth: 2} }
    onChange={(checked) => _myFunction(checked)}/>
```

Defaults:
    color: black.
    backgroundColor: white.
    borderRadius: 0
    borderWidth: 2

## onChange
Function to be called when toggling the checkbox.

```jsx
<Checkbox
    checked={true}
    onChange={(checked) => _myFunction(checked)}/>
```

## License

```
   Copyright (C) 2016 Carolina Aguilar

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing,
   software distributed under the License is distributed on an
   "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   KIND, either express or implied.  See the License for the
   specific language governing permissions and limitations
   under the License.
```
