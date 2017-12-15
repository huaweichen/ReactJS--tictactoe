import Auth0Lock from 'auth0-lock'

const AUTH_DOMAIN = 'huaweichen.au.auth0.com'
const AUTH_CLIENT_ID = '9goW18AzZidI8O38mOmqcRFG0c_McDej'

class AuthService {
	constructor() {
		this.lock = new Auth0Lock(AUTH_CLIENT_ID, AUTH_DOMAIN, {
			auth: {
				params: {
					scope: 'openid email'
				}
			}
		})

		this.showLock = this.showLock.bind(this)

		this.lock.on('authenticated', this.authProcess.bind(this))
	}

	authProcess = (authResult) => {
		console.log(authResult)
	}

	showLock() {
		this.lock.show()
	}

	setToken = (authFields) => {
		let {
			idToken,
			exp // expiration
		} = authFields

		localStorage.setItem('idToken', idToken)
		localStorage.setItem('exp', exp * 1000)
	}

	/**
	 * Check if token has expired.
	 */
	isCurrent = () => {
		let expString = localStorage.getItem('exp')

		if (!expString) {
			locationShape.removeItem('idToken')
			return false
		}

		let now = new Date();
		let exp = new Date(parseInt(expString, 10)) // 10 is radix parameter.
		if (exp < now) {
			this.logout()
			return false;
		}
		else {
			return true;
		}
	}

	/**
	 * Get up-to-date token.
	 */
	getToken() {
		let idToken = localStorage.getItem('idToken')
		if (this.isCurrent() && idToken) {
			return idToken
		}
		else {
			locationShape.removeItem('idToken')
			localStorage.removeItem('exp')

			return false;
		}
	}

	logout = () => {
		localStorage.removeItem('idToken')
		localStorage.removeItem('exp')
		location.reload()
	}

}
