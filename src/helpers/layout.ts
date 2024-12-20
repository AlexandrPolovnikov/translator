export const getLangs = async (arg: string) => {
  try {
    const url = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20241214T103324Z.b39bbc80c6bf6340.bf4e6f84636b9d17bdb04ae107ed702519c50bf4&lang=en-ru&text=${arg}`

    const response = await fetch(url)

    const data: LangI = await response.json()

    if (!response.ok || !data) {
      return {
        data: null,
        error: true,
      }
    }

    return {
      data,
      error: false,
    }
  } catch (err) {
    console.error("Ошибка:", err)
    return {
      data: null,
      error: true,
    }
  }
}
export interface LangI {
  head: Head
  def: Def[]
}

export interface Head {}

export interface Def {
  text: string
  pos: string
  tr: Tr[]
}

export interface Tr {
  text: string
  pos: string
  syn: Syn[]
  mean: Mean[]
  ex: Ex[]
}

export interface Syn {
  text: string
}

export interface Mean {
  text: string
}

export interface Ex {
  text: string
  tr: Tr2[]
}

export interface Tr2 {
  text: string
}
