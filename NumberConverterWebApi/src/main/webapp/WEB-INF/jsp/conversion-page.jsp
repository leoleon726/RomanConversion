<!DOCTYPE html>
<%@ include file="general/header.jsp"%>
<html>
<body>
	<div class="container">
		<form id="conversionForm">
			<span class="bmd-form-group">
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text"> <i class="material-icons">numbers</i>
						</span>
					</div>
					<input type="text" name="decimal" class="form-control"
						placeholder="Write decimal number" id="decimalInput">

					<div class="input-group-prepend">
						<span class="input-group-text"> <i class="material-icons">east</i>
						</span>
					</div>
					<input type="text" class="form-control"
						placeholder="Roman number converted from decimal"
						id="romanFromDecimal">

				</div>
			</span> <span class="bmd-form-group">
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text"> <i class="material-icons">numbers</i>
						</span>
					</div>
					<input type="text" name="binary" class="form-control"
						placeholder="Write binary number" id="binaryInput">

					<div class="input-group-prepend">
						<span class="input-group-text"> <i class="material-icons">east</i>
						</span>
					</div>
					<input type="text" class="form-control"
						placeholder="Roman number converted from binary"
						id="romanFromBinary">

				</div>
			</span>
		</form>
	</div>


	<%@ include file="general/footer.jsp"%>
	<script src="/js/page/conversion-page.js" type="text/javascript"></script> 
</body>

</html>
