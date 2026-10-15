/** @jsx jsx */
import { React, type AllWidgetProps, jsx, css } from 'jimu-core'
import { type IMConfig } from '../config'

interface FeatureAttr {
  objectid: number
  anio: number
  trimestre: number
  proveedor: string
  segmento: string
  terminal: string
  tecnologia: string
  abonados: number
}

interface PeriodAgg {
  periodKey: string
  anio: number
  trimestre: number
  t2g: number
  t3g: number
  t4g: number
  t5g: number
  total: number
}

const TECH_COLORS: Record<string, { fill: string; border: string; text: string }> = {
  '2G': { fill: '#F9E6CF', border: '#e8cdb0', text: '#5c452e' },
  '3G': { fill: '#FAC67A', border: '#e6a953', text: '#4d3208' },
  '4G': { fill: '#DA498D', border: '#be3475', text: '#ffffff' },
  '5G': { fill: '#69247C', border: '#4f175f', text: '#ffffff' }
}

const LucideIcons = {
  Refresh: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>
    </svg>
  ),
  Download: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
    </svg>
  ),
  Table: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/>
    </svg>
  ),
  BarChart: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>
    </svg>
  )
}

const widgetStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@700;800&display=swap');

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1a2a3a;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  user-select: none;

  .ontic-container {
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    height: 100%;
    box-sizing: border-box;
  }

  .mintic-brand-banner {
    position: relative;
    padding-bottom: 12px;
    border-bottom: 1px solid #e5edf5;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .mintic-stripe {
    height: 4px;
    background: linear-gradient(90deg, #FCD116 0%, #FCD116 33.3%, #003893 33.3%, #003893 66.6%, #CE1126 66.6%, #CE1126 100%);
    border-radius: 2px;
    margin-bottom: 4px;
  }

  .header-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .ontic-badge {
    background: linear-gradient(135deg, #004884 0%, #69247C 100%);
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    padding: 6px 10px;
    border-radius: 8px;
    box-shadow: 0 3px 8px rgba(0, 72, 132, 0.25);
  }

  .title-group {
    display: flex;
    flex-direction: column;
  }

  .indicator-tag {
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #004884;
  }

  .indicator-title {
    font-size: 1.15rem;
    font-weight: 800;
    color: #0b1f38;
    line-height: 1.2;
    margin: 2px 0;
  }

  .indicator-sub {
    font-size: 0.72rem;
    color: #59718d;
    font-weight: 500;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .kpi-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  .kpi-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    transition: transform 0.15s ease, border-color 0.15s ease;
  }
  .kpi-card:hover {
    border-color: #004884;
    transform: translateY(-1px);
  }

  .kpi-stripe-5g { border-top: 3px solid #69247C; }
  .kpi-stripe-4g { border-top: 3px solid #DA498D; }
  .kpi-stripe-3g { border-top: 3px solid #FAC67A; }
  .kpi-stripe-total { border-top: 3px solid #004884; }

  .kpi-label {
    font-size: 0.65rem;
    color: #64748b;
    font-weight: 600;
    line-height: 1.2;
  }

  .kpi-value {
    font-size: 1.18rem;
    font-weight: 900;
    color: #0f172a;
    margin: 4px 0 2px 0;
    font-family: 'JetBrains Mono', Consolas, monospace;
  }

  .kpi-subtext {
    font-size: 0.64rem;
    color: #059669;
    font-weight: 700;
  }

  .filters-bar {
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }

  .filter-group {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .filter-label {
    font-size: 0.70rem;
    font-weight: 700;
    color: #334155;
  }

  .filter-select {
    font-size: 0.72rem;
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    background: #ffffff;
    color: #1e293b;
    outline: none;
    cursor: pointer;
    max-width: 200px;
  }

  .pills-group {
    display: flex;
    align-items: center;
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    overflow: hidden;
  }

  .pill-btn {
    font-size: 0.68rem;
    font-weight: 600;
    padding: 4px 9px;
    border: none;
    background: transparent;
    color: #64748b;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .pill-btn.active {
    background: #004884;
    color: #ffffff;
    font-weight: 700;
  }

  .chart-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 14px 16px 8px 16px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
  }

  .chart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .chart-y-title {
    font-size: 0.70rem;
    font-weight: 700;
    color: #64748b;
  }

  .chart-view-toggle {
    display: flex;
    gap: 6px;
  }

  .view-icon-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.68rem;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 5px;
    border: 1px solid #cbd5e1;
    background: #ffffff;
    color: #475569;
    cursor: pointer;
  }
  .view-icon-btn.active {
    background: #004884;
    border-color: #004884;
    color: #ffffff;
  }

  .svg-chart-container {
    width: 100%;
    min-height: 290px;
    position: relative;
  }

  .svg-canvas {
    width: 100%;
    height: 100%;
    min-height: 290px;
    overflow: visible;
  }

  .chart-legend {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    padding: 10px 0 4px 0;
    border-top: 1px solid #f1f5f9;
    margin-top: 4px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    padding: 3px 8px;
    border-radius: 6px;
    transition: opacity 0.15s ease;
  }
  .legend-item.dimmed {
    opacity: 0.35;
  }

  .legend-color-box {
    width: 14px;
    height: 14px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }

  .legend-label {
    font-size: 0.72rem;
    font-weight: 700;
    color: #334155;
  }

  .chart-tooltip {
    position: absolute;
    pointer-events: none;
    background: rgba(11, 31, 56, 0.95);
    backdrop-filter: blur(4px);
    color: #ffffff;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 0.72rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
    z-index: 50;
    min-width: 180px;
    transform: translate(-50%, -105%);
    transition: opacity 0.15s ease, transform 0.1s ease;
  }

  .tooltip-title {
    font-weight: 800;
    font-size: 0.78rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 4px;
    margin-bottom: 6px;
    color: #FCD116;
  }

  .tooltip-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 3px;
  }

  .tooltip-total-row {
    border-top: 1px dashed rgba(255, 255, 255, 0.2);
    margin-top: 4px;
    padding-top: 4px;
    font-weight: 800;
  }

  .data-table-container {
    width: 100%;
    overflow-x: auto;
    max-height: 290px;
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.72rem;
  }

  .data-table th {
    background: #f1f5f9;
    color: #334155;
    font-weight: 700;
    padding: 8px 10px;
    text-align: right;
    border-bottom: 2px solid #cbd5e1;
    position: sticky;
    top: 0;
  }
  .data-table th:first-child { text-align: left; }

  .data-table td {
    padding: 7px 10px;
    border-bottom: 1px solid #f1f5f9;
    text-align: right;
    font-family: 'JetBrains Mono', Consolas, monospace;
  }
  .data-table td:first-child {
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }

  .footer-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 0.68rem;
    color: #64748b;
    padding-top: 4px;
  }

  .btn-sync {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.68rem;
    font-weight: 700;
    padding: 4px 9px;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    background: #ffffff;
    color: #004884;
    cursor: pointer;
  }
  .btn-sync:hover {
    background: #f1f5f9;
  }

  .spin-icon {
    animation: rotateSpin 1s linear infinite;
  }
  @keyframes rotateSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-width: 680px) {
    .kpi-row { grid-template-columns: repeat(2, 1fr); }
  }
`
const Widget = (props: AllWidgetProps<IMConfig>) => {
  const serviceUrl = props.config?.serviceUrl || 'https://arcgis.esri.co/server/rest/services/Hosted/Ontic/FeatureServer/0'
  const widgetTitle = props.config?.widgetTitle || 'Accesos a Internet móvil'
  const sourceText = props.config?.sourceText || 'Registro Administrativo Reporte HECAA - MinTIC'
  const autoRefreshSec = props.config?.autoRefreshSec || 120

  const [rawRecords, setRawRecords] = React.useState<FeatureAttr[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [refreshing, setRefreshing] = React.useState<boolean>(false)
  const [lastUpdated, setLastUpdated] = React.useState<string>('Cargando...')
  
  // Filtros
  const [selectedProveedor, setSelectedProveedor] = React.useState<string>('TODOS')
  const [selectedSegmento, setSelectedSegmento] = React.useState<string>('TODOS')
  const [selectedTerminal, setSelectedTerminal] = React.useState<string>('TODOS')
  const [viewMode, setViewMode] = React.useState<'stacked' | 'table'>('stacked')
  const [activeTechs, setActiveTechs] = React.useState<Record<string, boolean>>({
    '2G': true,
    '3G': true,
    '4G': true,
    '5G': true
  })

  // Tooltip
  const [tooltipData, setTooltipData] = React.useState<{ x: number; y: number; period: PeriodAgg } | null>(null)

  // Cargar datos desde el FeatureServer oficial
  const fetchServiceData = React.useCallback(async (isManual: boolean = false) => {
    if (isManual) setRefreshing(true)
    try {
      const url = `${serviceUrl}/query?where=1%3D1&outFields=*&returnGeometry=false&f=json`
      const res = await fetch(url, { cache: 'no-store' })
      if (res.ok) {
        const json = await res.json()
        if (json && json.features && Array.isArray(json.features)) {
          const items: FeatureAttr[] = json.features.map((f: any) => f.attributes)
          setRawRecords(items)
          const now = new Date()
          setLastUpdated(now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
        }
      }
    } catch (err) {
      console.warn('[ONTIC Widget] Error al consultar datos:', err)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [serviceUrl])

  React.useEffect(() => {
    fetchServiceData()
    const timer = setInterval(() => {
      fetchServiceData()
    }, Math.max(30, autoRefreshSec) * 1000)
    return () => clearInterval(timer)
  }, [fetchServiceData, autoRefreshSec])

  // Lista de Proveedores únicos para el filtro
  const uniqueProveedores = React.useMemo(() => {
    const set = new Set<string>()
    rawRecords.forEach(r => {
      if (r.proveedor) set.add(r.proveedor.trim())
    })
    return Array.from(set).sort()
  }, [rawRecords])

  // Filtrado y agregación por Periodo (anio-trimestre)
  const aggregatedData = React.useMemo(() => {
    const map = new Map<string, { anio: number; trimestre: number; t2g: number; t3g: number; t4g: number; t5g: number }>()

    rawRecords.forEach(r => {
      if (selectedProveedor !== 'TODOS' && r.proveedor?.trim() !== selectedProveedor) return
      if (selectedSegmento !== 'TODOS' && r.segmento?.trim() !== selectedSegmento) return
      if (selectedTerminal !== 'TODOS' && r.terminal?.trim() !== selectedTerminal) return

      const key = `${r.anio}-${r.trimestre}`
      if (!map.has(key)) {
        map.set(key, { anio: r.anio, trimestre: r.trimestre, t2g: 0, t3g: 0, t4g: 0, t5g: 0 })
      }
      const entry = map.get(key)!
      const count = r.abonados || 0
      const tech = (r.tecnologia || '').toUpperCase()

      if (tech === '2G') entry.t2g += count
      else if (tech === '3G') entry.t3g += count
      else if (tech === '4G') entry.t4g += count
      else if (tech === '5G') entry.t5g += count
    })

    const sortedKeys = Array.from(map.keys()).sort((a, b) => {
      const [yA, qA] = a.split('-').map(Number)
      const [yB, qB] = b.split('-').map(Number)
      if (yA !== yB) return yA - yB
      return qA - qB
    })

    return sortedKeys.map(key => {
      const e = map.get(key)!
      const v2g = activeTechs['2G'] ? e.t2g / 1000000 : 0
      const v3g = activeTechs['3G'] ? e.t3g / 1000000 : 0
      const v4g = activeTechs['4G'] ? e.t4g / 1000000 : 0
      const v5g = activeTechs['5G'] ? e.t5g / 1000000 : 0
      const total = v2g + v3g + v4g + v5g

      return {
        periodKey: key,
        anio: e.anio,
        trimestre: e.trimestre,
        t2g: v2g,
        t3g: v3g,
        t4g: v4g,
        t5g: v5g,
        total: total
      } as PeriodAgg
    })
  }, [rawRecords, selectedProveedor, selectedSegmento, selectedTerminal, activeTechs])

  // KPIs del último periodo
  const latestKPI = React.useMemo(() => {
    if (aggregatedData.length === 0) return null
    const latest = aggregatedData[aggregatedData.length - 1]
    const pct4g = latest.total > 0 ? (latest.t4g / latest.total) * 100 : 0
    const pct5g = latest.total > 0 ? (latest.t5g / latest.total) * 100 : 0
    return {
      period: latest.periodKey,
      total: latest.total,
      v5g: latest.t5g,
      pct5g: pct5g,
      v4g: latest.t4g,
      pct4g: pct4g,
      v3g: latest.t3g
    }
  }, [aggregatedData])

  const chartWidth = 740
  const chartHeight = 270
  const margin = { top: 20, right: 20, bottom: 35, left: 45 }
  const plotWidth = chartWidth - margin.left - margin.right
  const plotHeight = chartHeight - margin.top - margin.bottom

  const maxTotal = React.useMemo(() => {
    let max = 0
    aggregatedData.forEach(d => { if (d.total > max) max = d.total })
    return max > 0 ? Math.ceil(max * 1.15 / 5) * 5 : 50
  }, [aggregatedData])

  const barWidth = React.useMemo(() => {
    if (aggregatedData.length === 0) return 30
    return Math.min(42, Math.max(18, (plotWidth / aggregatedData.length) * 0.65))
  }, [aggregatedData, plotWidth])

  const toggleTech = (tech: string) => {
    setActiveTechs(prev => ({ ...prev, [tech]: !prev[tech] }))
  }

  const exportToCSV = () => {
    if (aggregatedData.length === 0) return
    let csv = 'Periodo,Anio,Trimestre,2G_Millones,3G_Millones,4G_Millones,5G_Millones,Total_Millones\n'
    aggregatedData.forEach(d => {
      csv += `${d.periodKey},${d.anio},${d.trimestre},${d.t2g.toFixed(2)},${d.t3g.toFixed(2)},${d.t4g.toFixed(2)},${d.t5g.toFixed(2)},${d.total.toFixed(2)}\n`
    })
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `ONTIC_Accesos_Internet_Movil.csv`
    link.click()
  }
  return (
    <div css={widgetStyle} className="jimu-widget">
      <div className="ontic-container">

        {/* Encabezado Institucional MinTIC / ONTIC */}
        <div className="mintic-brand-banner">
          <div className="mintic-stripe" />
          <div className="header-main">
            <div className="header-left">
              <div className="ontic-badge">ONTIC</div>
              <div className="title-group">
                <span className="indicator-tag">Indicador Sectorial • Conectividad</span>
                <h2 className="indicator-title">{widgetTitle}</h2>
                <span className="indicator-sub">
                  Número de accesos móviles a Internet en millones por tipo de tecnología • {sourceText}
                </span>
              </div>
            </div>

            <div className="header-right">
              <button
                className="btn-sync"
                onClick={() => fetchServiceData(true)}
                title="Actualizar datos desde el servicio ArcGIS"
              >
                <span className={refreshing ? 'spin-icon' : ''}>
                  <LucideIcons.Refresh />
                </span>
                <span>Actualizar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tarjetas KPI de Resumen */}
        {latestKPI && (
          <div className="kpi-row">
            <div className="kpi-card kpi-stripe-total">
              <span className="kpi-label">Total Accesos ({latestKPI.period})</span>
              <span className="kpi-value">{latestKPI.total.toFixed(1)} M</span>
              <span className="kpi-subtext">Millones de accesos móviles</span>
            </div>

            <div className="kpi-card kpi-stripe-4g">
              <span className="kpi-label">Tecnología 4G LTE</span>
              <span className="kpi-value">{latestKPI.v4g.toFixed(1)} M</span>
              <span className="kpi-subtext">{latestKPI.pct4g.toFixed(1)}% del mercado</span>
            </div>

            <div className="kpi-card kpi-stripe-5g">
              <span className="kpi-label">Despliegue 5G</span>
              <span className="kpi-value">{latestKPI.v5g.toFixed(1)} M</span>
              <span className="kpi-subtext">{latestKPI.pct5g.toFixed(1)}% en expansión</span>
            </div>

            <div className="kpi-card kpi-stripe-3g">
              <span className="kpi-label">3G en Transición</span>
              <span className="kpi-value">{latestKPI.v3g.toFixed(1)} M</span>
              <span className="kpi-subtext">Tendencia en descenso</span>
            </div>
          </div>
        )}

        {/* Barra de Filtros Interactivos */}
        <div className="filters-bar">
          <div className="filter-group">
            <span className="filter-label">Operador:</span>
            <select
              className="filter-select"
              value={selectedProveedor}
              onChange={e => setSelectedProveedor(e.target.value)}
            >
              <option value="TODOS">Todos los Operadores ({uniqueProveedores.length})</option>
              {uniqueProveedores.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <span className="filter-label">Segmento:</span>
            <div className="pills-group">
              {['TODOS', 'PREPAGO', 'POSPAGO'].map(s => (
                <button
                  key={s}
                  className={`pill-btn ${selectedSegmento === s ? 'active' : ''}`}
                  onClick={() => setSelectedSegmento(s)}
                >
                  {s === 'TODOS' ? 'Todos' : s}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">Terminal:</span>
            <div className="pills-group">
              {['TODOS', 'TELÉFONO MÓVIL', 'DATA CARD'].map(t => (
                <button
                  key={t}
                  className={`pill-btn ${selectedTerminal === t ? 'active' : ''}`}
                  onClick={() => setSelectedTerminal(t)}
                >
                  {t === 'TODOS' ? 'Todos' : t === 'TELÉFONO MÓVIL' ? 'Móvil' : 'Módem'}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <div className="chart-view-toggle">
              <button
                className={`view-icon-btn ${viewMode === 'stacked' ? 'active' : ''}`}
                onClick={() => setViewMode('stacked')}
                title="Vista Gráfico de Barras"
              >
                <LucideIcons.BarChart /> Gráfica
              </button>
              <button
                className={`view-icon-btn ${viewMode === 'table' ? 'active' : ''}`}
                onClick={() => setViewMode('table')}
                title="Vista Tabla de Datos"
              >
                <LucideIcons.Table /> Tabla
              </button>
              <button
                className="view-icon-btn"
                onClick={exportToCSV}
                title="Descargar datos en CSV"
              >
                <LucideIcons.Download /> CSV
              </button>
            </div>
          </div>
        </div>

        {/* Gráfico de Barras Apiladas SVG Oficial MinTIC */}
        {viewMode === 'stacked' ? (
          <div className="chart-card">
            <div className="chart-header">
              <span className="chart-y-title">Millones de accesos</span>
            </div>

            <div className="svg-chart-container">
              <svg className="svg-canvas" viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
                {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
                  const yVal = maxTotal * (1 - pct)
                  const yPos = margin.top + plotHeight * pct
                  return (
                    <g key={i}>
                      <line
                        x1={margin.left}
                        y1={yPos}
                        x2={chartWidth - margin.right}
                        y2={yPos}
                        stroke="#e2e8f0"
                        strokeDasharray={pct === 1 ? 'none' : '3,3'}
                        strokeWidth="1"
                      />
                      <text
                        x={margin.left - 8}
                        y={yPos + 4}
                        textAnchor="end"
                        fontSize="10"
                        fill="#64748b"
                        fontFamily="JetBrains Mono, monospace"
                      >
                        {Math.round(yVal)} M
                      </text>
                    </g>
                  )
                })}

                {aggregatedData.map((d, colIdx) => {
                  const colX = margin.left + (colIdx + 0.5) * (plotWidth / (aggregatedData.length || 1))
                  const x = colX - barWidth / 2

                  const h2g = (d.t2g / maxTotal) * plotHeight
                  const h3g = (d.t3g / maxTotal) * plotHeight
                  const h4g = (d.t4g / maxTotal) * plotHeight
                  const h5g = (d.t5g / maxTotal) * plotHeight

                  const baseLine = margin.top + plotHeight

                  const y2g = baseLine - h2g
                  const y3g = y2g - h3g
                  const y4g = y3g - h4g
                  const y5g = y4g - h5g

                  const isHovered = tooltipData?.period.periodKey === d.periodKey

                  return (
                    <g
                      key={d.periodKey}
                      cursor="pointer"
                      onMouseEnter={() => {
                        setTooltipData({
                          x: colX,
                          y: y5g,
                          period: d
                        })
                      }}
                      onMouseLeave={() => setTooltipData(null)}
                    >
                      {isHovered && (
                        <rect
                          x={colX - (plotWidth / (aggregatedData.length || 1)) / 2}
                          y={margin.top}
                          width={plotWidth / (aggregatedData.length || 1)}
                          height={plotHeight}
                          fill="#f1f5f9"
                          opacity="0.6"
                        />
                      )}

                      {h2g > 0 && (
                        <rect
                          x={x}
                          y={y2g}
                          width={barWidth}
                          height={h2g}
                          fill={TECH_COLORS['2G'].fill}
                          stroke={TECH_COLORS['2G'].border}
                          strokeWidth="0.8"
                        />
                      )}

                      {h3g > 0 && (
                        <rect
                          x={x}
                          y={y3g}
                          width={barWidth}
                          height={h3g}
                          fill={TECH_COLORS['3G'].fill}
                          stroke={TECH_COLORS['3G'].border}
                          strokeWidth="0.8"
                        />
                      )}

                      {h4g > 0 && (
                        <rect
                          x={x}
                          y={y4g}
                          width={barWidth}
                          height={h4g}
                          fill={TECH_COLORS['4G'].fill}
                          stroke={TECH_COLORS['4G'].border}
                          strokeWidth="0.8"
                        />
                      )}

                      {h5g > 0 && (
                        <rect
                          x={x}
                          y={y5g}
                          width={barWidth}
                          height={h5g}
                          rx="4"
                          ry="4"
                          fill={TECH_COLORS['5G'].fill}
                          stroke={TECH_COLORS['5G'].border}
                          strokeWidth="0.8"
                        />
                      )}

                      {h4g > 18 && (
                        <text
                          x={colX}
                          y={y4g + h4g / 2 + 3}
                          textAnchor="middle"
                          fontSize="9"
                          fontWeight="700"
                          fill="#ffffff"
                        >
                          {d.t4g.toFixed(1)}
                        </text>
                      )}

                      <text
                        x={colX}
                        y={Math.min(baseLine - 4, y5g - 4)}
                        textAnchor="middle"
                        fontSize={isHovered ? '10' : '8.5'}
                        fontWeight={isHovered ? '800' : '600'}
                        fill={isHovered ? '#004884' : '#64748b'}
                      >
                        {d.total.toFixed(1)}
                      </text>

                      <text
                        x={colX}
                        y={baseLine + 16}
                        textAnchor="middle"
                        fontSize="9.5"
                        fontWeight={isHovered ? '800' : '500'}
                        fill={isHovered ? '#004884' : '#334155'}
                      >
                        {d.periodKey}
                      </text>
                    </g>
                  )
                })}
              </svg>

              {tooltipData && (
                <div
                  className="chart-tooltip"
                  style={{
                    left: `${(tooltipData.x / chartWidth) * 100}%`,
                    top: `${Math.max(10, (tooltipData.y / chartHeight) * 100)}%`
                  }}
                >
                  <div className="tooltip-title">
                    Trimestre: {tooltipData.period.periodKey}
                  </div>
                  <div className="tooltip-row">
                    <span style={{ color: TECH_COLORS['5G'].fill }}>● 5G:</span>
                    <span>{tooltipData.period.t5g.toFixed(2)} M ({tooltipData.period.total > 0 ? ((tooltipData.period.t5g / tooltipData.period.total) * 100).toFixed(1) : 0}%)</span>
                  </div>
                  <div className="tooltip-row">
                    <span style={{ color: TECH_COLORS['4G'].fill }}>● 4G:</span>
                    <span>{tooltipData.period.t4g.toFixed(2)} M ({tooltipData.period.total > 0 ? ((tooltipData.period.t4g / tooltipData.period.total) * 100).toFixed(1) : 0}%)</span>
                  </div>
                  <div className="tooltip-row">
                    <span style={{ color: TECH_COLORS['3G'].fill }}>● 3G:</span>
                    <span>{tooltipData.period.t3g.toFixed(2)} M ({tooltipData.period.total > 0 ? ((tooltipData.period.t3g / tooltipData.period.total) * 100).toFixed(1) : 0}%)</span>
                  </div>
                  <div className="tooltip-row">
                    <span style={{ color: TECH_COLORS['2G'].border }}>● 2G:</span>
                    <span>{tooltipData.period.t2g.toFixed(2)} M ({tooltipData.period.total > 0 ? ((tooltipData.period.t2g / tooltipData.period.total) * 100).toFixed(1) : 0}%)</span>
                  </div>
                  <div className="tooltip-row tooltip-total-row">
                    <span>Total Accesos:</span>
                    <span style={{ color: '#FCD116' }}>{tooltipData.period.total.toFixed(2)} Millones</span>
                  </div>
                </div>
              )}
            </div>

            <div className="chart-legend">
              {['2G', '3G', '4G', '5G'].map(tech => (
                <div
                  key={tech}
                  className={`legend-item ${!activeTechs[tech] ? 'dimmed' : ''}`}
                  onClick={() => toggleTech(tech)}
                  title={`Clic para ${activeTechs[tech] ? 'ocultar' : 'mostrar'} ${tech}`}
                >
                  <div
                    className="legend-color-box"
                    style={{ background: TECH_COLORS[tech].fill, borderColor: TECH_COLORS[tech].border }}
                  />
                  <span className="legend-label">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="chart-card">
            <div className="data-table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Periodo</th>
                    <th>2G (Millones)</th>
                    <th>3G (Millones)</th>
                    <th>4G (Millones)</th>
                    <th>5G (Millones)</th>
                    <th>Total (Millones)</th>
                  </tr>
                </thead>
                <tbody>
                  {aggregatedData.map(d => (
                    <tr key={d.periodKey}>
                      <td>{d.periodKey} ({d.anio} - T{d.trimestre})</td>
                      <td style={{ color: TECH_COLORS['2G'].text }}>{d.t2g.toFixed(2)} M</td>
                      <td style={{ color: TECH_COLORS['3G'].text }}>{d.t3g.toFixed(2)} M</td>
                      <td style={{ color: TECH_COLORS['4G'].text, fontWeight: 700 }}>{d.t4g.toFixed(2)} M</td>
                      <td style={{ color: TECH_COLORS['5G'].fill, fontWeight: 700 }}>{d.t5g.toFixed(2)} M</td>
                      <td style={{ fontWeight: 800, color: '#004884' }}>{d.total.toFixed(2)} M</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="footer-row">
          <span>Fuente: {sourceText} • Servicio Esri Hosted FeatureServer</span>
          <span>Sincronizado: {lastUpdated} ({rawRecords.length} registros cargados)</span>
        </div>

      </div>
    </div>
  )
}

export default Widget