import { AxiosInstance } from 'axios'
import { HttpService } from '../HttpService/http-service'
import { apiClient } from '../HttpClient/client-config'

export const createHttp = <IResponse>() => new HttpService<IResponse, AxiosInstance>(apiClient)
