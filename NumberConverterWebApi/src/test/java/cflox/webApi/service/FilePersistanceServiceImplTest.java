package cflox.webApi.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;

class FilePersistanceServiceImplTest {
	
	@InjectMocks
	private FilePersistanceService fileService = new FilePersistanceServiceImpl();

	@Test
	void testWriteIntoFile() {
		boolean aux = fileService.writeIntoFile("conversion saving");
		assertEquals(aux, true);
	}

}
