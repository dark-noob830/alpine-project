import Alpine from 'alpinejs'
import multiselect from './components/multiselect.js'

window.Alpine = Alpine
Alpine.data('multiselect', multiselect)

Alpine.start()