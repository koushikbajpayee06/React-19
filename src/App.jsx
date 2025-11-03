
import ClassBind from './class-binding/class-binding'
import Fetch from './components/AJAX-Techniques/fetch'
import XmlFetch from './components/AJAX-Techniques/xmlHttp'
import ArrayBinding from './components/binding-data-types/non-premitive/Array'
import ArrayOfObjectBinding from './components/binding-data-types/non-premitive/ArrayOfObject'
import NestedDataBinding from './components/binding-data-types/non-premitive/Nested'
import ObjectBinding from './components/binding-data-types/non-premitive/object'
import { BooleanBinding } from './components/binding-data-types/premitive/boolean-binding'
import { NullBinding } from './components/binding-data-types/premitive/null-binding'
import { NumberBinding } from './components/binding-data-types/premitive/number-bindings'
import { UndefinedBinding } from './components/binding-data-types/premitive/undefined-binding'
import AxiousFetch from './components/React-3rdParty-Services/axios'
import StyleBind from './style-binding/style-binding'





function App() {

  return (
    <div>
      <StyleBind/>
    </div>  
  )
}

export default App
