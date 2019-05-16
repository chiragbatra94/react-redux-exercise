/* time in ms of how long a fake-request from api-client is going to take to complete */
export const apiResponseTime = 500

/* possible http errors that api-client can throw */
export const httpErrorMap = {
  500: 'internal server error',
  503: 'service unavailable',
}

/* how often the api should error, 0-1, the higher the more often it errors */
export const errorRngFactor = 0.1
