import { parse } from 'csv-parse'
import fs from 'fs'

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const strem = fs.createReadStream(file.path)
    const parseFile = parse()

    strem.pipe(parseFile)
    
    parseFile.on('data', async (line) => {
      console.log(line)
    })
  }
}

export { ImportCategoryUseCase }