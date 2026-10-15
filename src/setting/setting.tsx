/** @jsx jsx */
import { React, jsx, css } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { TextInput, NumericInput, Select, Option } from 'jimu-ui'
import { type IMConfig } from '../config'

const settingStyle = css`
  .setting-inner {
    padding: 12px;
    font-size: 13px;
  }
  .brand-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #00488415;
    color: #004884;
    font-weight: 700;
    font-size: 11px;
    padding: 3px 8px;
    border-radius: 4px;
    margin-bottom: 12px;
  }
`

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const serviceUrl = props.config?.serviceUrl || 'https://arcgis.esri.co/server/rest/services/Hosted/Ontic/FeatureServer/0'
  const widgetTitle = props.config?.widgetTitle || 'Accesos a Internet móvil'
  const sourceText = props.config?.sourceText || 'Registro Administrativo Reporte HECAA - MinTIC'
  const defaultSegmento = props.config?.defaultSegmento || 'TODOS'
  const autoRefreshSec = props.config?.autoRefreshSec || 120

  const onSettingChange = (key: string, value: any) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set(key, value)
    })
  }

  return (
    <div css={settingStyle} className="widget-setting-ontic">
      <SettingSection title="Fuente de Datos ONTIC • MinTIC">
        <div className="brand-pill">
          <span>🇨🇴 MinTIC • PotencIA Digital</span>
        </div>

        <SettingRow label="Título del Indicador">
          <TextInput
            size="sm"
            value={widgetTitle}
            onChange={e => onSettingChange('widgetTitle', e.target.value)}
          />
        </SettingRow>

        <SettingRow label="URL del FeatureServer (Capa 0)">
          <TextInput
            size="sm"
            value={serviceUrl}
            onChange={e => onSettingChange('serviceUrl', e.target.value)}
          />
        </SettingRow>

        <SettingRow label="Fuente / Nota Legal">
          <TextInput
            size="sm"
            value={sourceText}
            onChange={e => onSettingChange('sourceText', e.target.value)}
          />
        </SettingRow>

        <SettingRow label="Segmento por Defecto">
          <Select
            size="sm"
            value={defaultSegmento}
            onChange={e => onSettingChange('defaultSegmento', e.target.value)}
          >
            <Option value="TODOS">Todos (Prepago + Pospago)</Option>
            <Option value="PREPAGO">Solo Prepago</Option>
            <Option value="POSPAGO">Solo Pospago</Option>
          </Select>
        </SettingRow>

        <SettingRow label="Auto-refresco (segundos)">
          <NumericInput
            size="sm"
            value={autoRefreshSec}
            min={30}
            max={3600}
            onChange={val => onSettingChange('autoRefreshSec', val || 120)}
          />
        </SettingRow>
      </SettingSection>
    </div>
  )
}

export default Setting