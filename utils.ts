function printProgress(progress: string, end: boolean = false){
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(progress);

    if (end) {
        process.stdout.write('\n');
    }
}

export { printProgress }