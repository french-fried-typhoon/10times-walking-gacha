import { data } from 'virtual:vite-plugin-stations'

export function useStation() {
  function getList(prefecture?: 'tokyo'): string[] {
    if (prefecture) {
      const pref_cd = 13 

      return Array.from(new Set(data[pref_cd].map((d: any) => d.station_name)))
    }

    return Array.from(new Set(Object.values(data).flatMap((d: any) => {
      return d.map((d: any) => d.station_name)
    })))
  }

  return {
    getList
  }
}