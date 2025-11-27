import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Wraper from './Wraper.jsx'

createRoot(document.getElementById('root')).render(
<Wraper>
    <App />
</Wraper>
)
