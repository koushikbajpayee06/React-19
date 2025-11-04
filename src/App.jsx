
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
import { EventArgument } from './components/event-binding/event-default-argument'
import { EventBinding } from './components/event-binding/event-binding'

import AxiousFetch from './components/React-3rdParty-Services/axios'
import StyleBind from './components/style-binding/style-binding'
import { EventCustomArgument } from './components/event-binding/event-custom-arguments'
import { EventBothArgument } from './components/event-binding/event-both-argument.'
import { EventPropagation } from './components/event-binding/event-propagation'






function App() {

  return (
    <div>
       <EventPropagation/>
    </div>  
  )
}

export default App
