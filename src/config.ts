import { type ImmutableObject } from 'jimu-core'

export interface Config {
  serviceUrl: string
  widgetTitle: string
  widgetSubtitle: string
  sourceText: string
  defaultSegmento: string
  defaultTerminal: string
  defaultProveedor: string
  chartType: 'stacked' | 'percent'
  autoRefreshSec: number
}

export type IMConfig = ImmutableObject<Config>