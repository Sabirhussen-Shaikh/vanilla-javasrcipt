// const sidebarButton = document.getElementById('toggle-btn');
// const sidebar = document.getElementById('sidebar')

function Sid() {
const SidebarFunction = {

    sidebarButton: document.getElementById('toggle-btn'),

    sidebar: document.getElementById('sidebar'),

    toggleSidebar() {
        this.sidebar.classList.toggle('close');
        this.sidebarButton.classList.toggle('rotate')

        this.closeAllSubMenu()
    },

    toggleSubMenu(button) {

        if (!button.nextElementSibling.classList.contains('show')) {
            this.closeAllSubMenu()
        }

        button.nextElementSibling.classList.toggle('show');
        button.classList.toggle('rotate');

        if (this.sidebar.classList.contains('close')) {
            this.sidebar.classList.toggle('close')
            this.sidebarButton.classList.toggle('rotate')
        }
    },

    closeAllSubMenu() {
        Array.from(this.sidebar.getElementsByClassName('show')).forEach(ul => {
            ul.classList.remove('show')
            ul.previousElementSibling.classList.remove('rotate')
        })
    }

}
}

const cart = Sid()
cart.toggleSidebar()