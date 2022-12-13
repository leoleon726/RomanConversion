package cflox.webApi.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class FilePersistanceServiceImpl implements FilePersistanceService {

	public static final String FILE_NAME = "conversionPersistance.txt";
	Logger logger = LoggerFactory.getLogger(this.getClass());

	public FilePersistanceServiceImpl() {
		try {
			File file = new File(FILE_NAME);
			if (file.createNewFile()) {
				logger.info("File created: " + file.getName());
			} else {
				System.out.println("File already exists.");
			}
		} catch (IOException e) {
			logger.error("FilePersistanceServiceImpl() :" + e );
		}

	}

	public boolean writeIntoFile(String conversion) {
		try {
			FileWriter myWriter = new FileWriter(FILE_NAME,true);
			BufferedWriter out = null;
			Date savingDate = new Date ();
		    out = new BufferedWriter(myWriter);
		    out.write("\n" + savingDate + ": " + conversion );
		    out.flush();
		    out.close();
			return true;
		} catch (IOException e) {
			logger.error("writeIntoFile() with conversion: "+conversion + ":" + e );
			return false;
		}
	}

}
