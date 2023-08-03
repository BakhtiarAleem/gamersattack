module.exports = {
    '**/*.js?(x)': (filenames) =>
        `next lint --fix --file ${filenames
            .map((file) => file.split(process.cwd().replaceAll('\\', '/'))[1])
            .join(' --file ')}`,
    '**/*.css': (filenames) =>
        `stylelint --fix ${filenames
            .map(
                (file) =>
                    file.split(process.cwd().replaceAll('\\', '/') + '/')[1]
            )
            .join(' ')}`,
}
