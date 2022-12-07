package cflox.webApi.service;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class FilePersistanceServiceImpl implements FilePersistanceService {

	public static final String FILE_NAME = "/Users/leoleon/Documents/development/workspace/Interview/conversionPersistance.txt";
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
			logger.info("An error occurred.");
			e.printStackTrace();
		}

	}

	public boolean writeIntoFile(String conversion) {
		try {
			FileWriter myWriter = new FileWriter(FILE_NAME);
			myWriter.write(conversion);
			myWriter.close();
			return true;
		} catch (IOException e) {
			System.out.println("An error occurred.");
			e.printStackTrace();
			return false;
		}
	}

}
