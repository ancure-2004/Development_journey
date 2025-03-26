// Problem statement is that You have to write a Node.js program to clear clutter
//  inside of a directory and organize the contents of that directory into different folders

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

let basepath = "C:\\Developing\\Development_journey\\Node JS\\Lecture_7";
let files = await fs.readdir(basepath);
console.log(files);

for (const item of files) {
	console.log("Running for ", item);
	let ext = item.split(".")[item.split(".").length - 1];
	if (ext != "js" && ext != "json" && item.split(".").length > 1) {
		if (fsn.existsSync(path.join(basepath, ext))) {
			//Move the file to directory if its is not a js or json file
			fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
		} else {
			fs.mkdir(ext);
			fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
		}
	}
}
