import { AxiosInstance } from 'axios'
import { HttpService } from '../HttpService/http-service'
import { apiClient } from '../ApiClient/client-config'

export const createHttp = <IResponse>() => new HttpService<IResponse, AxiosInstance>(apiClient)
