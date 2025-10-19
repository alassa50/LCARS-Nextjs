// Common types used across the application

export interface Module {
  id: string
  name: string
  description: string
  icon: string
  color: string
  route: string
}

export interface APIResponse<T = any> {
  success: boolean
  data?: T
  error?: string
}

export type LCARSColor =
  | 'orange'
  | 'blue'
  | 'purple'
  | 'red'
  | 'yellow'
  | 'tan'
  | 'peach'
  | 'lightblue'

export interface UserSettings {
  theme?: 'default' | 'classic'
  apiKeys?: {
    openai?: string
    github?: string
    googleDrive?: string
  }
  connections?: {
    sftp?: Array<{
      name: string
      host: string
      port: number
      username: string
    }>
    kubernetes?: Array<{
      name: string
      cluster: string
      project: string
    }>
  }
}
